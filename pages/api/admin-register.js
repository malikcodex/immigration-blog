import { connectDatabase } from "@/core/db";
import { hash } from "bcryptjs";
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    let pattern = /[^\s]+@[^\s]+\.[^\s]{3,}/;

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
            if(find) {
                return res.status(200).send({status: 'error', msg: 'Please note that this email address is already registered'});
            }
            
            let hashedPassword = await hash(password, 10);
            await db.collection("adminDetails").insertOne({
                email: email,
                password: hashedPassword
            })

            res.status(200).send({status: 'success', msg: 'You are now registered as admin'});
        } catch(error) {
            res.status(200).send({status: 'error', msg: 'Method Not Allowed'});
        }
    }
}