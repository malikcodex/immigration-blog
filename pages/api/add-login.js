import { connectDatabase } from "@/core/db";
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    let pattern = /[^\s]+@[^\s]+\.[^\s]{3,}/;
    let jwt_token = process.env.JWT_SECRET || '0cd82e9ce4afd34e878ec8ef142090d6e6c86bc9d58c37e5328d88b9acb70e4d';

    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        try {
            let {email, password} = req.body;

            if(!email || email.trim() === '') {
                return res.status(200).send({status: 'error' , msg: 'Please enter the email address'});    
            }

            if(!pattern.test(email)) {
                return res.status(200).send({status: 'error' , msg: 'Plesee check the email address'});
            }

            if(!password || password.trim() === '') {
                return res.status(200).send({status: 'error', msg: 'please enter the password'});
            }

            let db = await connectDatabase();
            let find = await db.collection("adminDetails").findOne({email: email});
            if(!find) {
                return res.status(200).send({status: 'error', msg: 'This is not the correct admin email address'});
            }
            
            let correct_pass = await compare(password, find.password);
            if(!correct_pass) {
                return res.status(200).send({status: 'error', msg: 'Please enter the correct password'});
            }

            const token = jwt.sign({userId: find._id, email: find.email}, jwt_token, {expiresIn: '1h'});
            res.status(200).send({status: 'success', msg: token});
        } catch(error) {
            console.log(error);
            res.status(200).send({status: 'error', msg: 'Method Not Allowed'});
        }
    }
}