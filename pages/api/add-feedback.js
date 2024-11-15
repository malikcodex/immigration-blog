import { connectDatabase } from "@/core/db";
import cloudinary from 'cloudinary';
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    let pattern = /[^\s]+@[^\s]+\.[^\s]{3,}/;
    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        const {username, email, feedback} = req.body;

        if(!username || username.trim() === "") {
            return res.status(200).send({status: 'error', msg: 'Please enter the username'});
        }

        if(!email || email.trim() === "") {
            return res.status(200).send({status: 'error', msg: 'Please enter the email address'});
        }

        if(!pattern.test(email)) {
            return res.status(200).send({status: 'error', msg: 'Please check the email address'});
        }

        if(!feedback || feedback.trim() === "") {
            return res.status(200).send({status: 'error', msg: 'Please enter the feedback message'});
        }

        let query;
        query = {email: email}

        let db = await connectDatabase();
        let check = await db.collection("feedbacks").findOne(query);
        if(check) {
            await db.collection("feedbacks").updateOne(
                {
                    email: email
                },
                {
                    $set: {
                        username: username,
                        email: email,
                        feedback: feedback,
                        date: new Date().toLocaleDateString("en-US" , {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })
                    }
                }
            )
        } else {
            await db.collection("feedbacks").insertOne({
                username: username,
                email: email,
                feedback: feedback,
                date: new Date().toLocaleDateString("en-US" , {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })
            })
        }

        res.status(200).send({status: 'success', msg: 'Your Feedback will help us to make our service more reliable and strong'});
    }
}