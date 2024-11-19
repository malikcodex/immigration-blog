import { connectDatabase } from "@/core/db";
import { ObjectId } from "mongodb";
import {clean_str} from '@/core/util';

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        try {
            const {input, output, id} = req.body;

            if(!input || input == null) {
                return res.status(200).send({status: 'error', msg: 'Please enter the question'});
            }

            if(!output || output == null) {
                return res.status(200).send({status: 'error' , msg: 'Please enter the answer'});
            }

            let db = await connectDatabase();
            let query;
            let obj_id = new ObjectId(id);
            query = id == null || id == '' ? {input: input, output: output} : {input: input, output: output, _id: {$ne: obj_id}}
            let find = await db.collection("qan").findOne(query);
            if(!find) {
                if(id === null) {
                    await db.collection("qan").insertOne({
                        input: input,
                        output: output,
                        date: new Date().toLocaleDateString("en", {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })
                    })
        
                    await res.status(200).send({status: 'success', msg: 'Question & Answer Added'});
                } else {
                    await db.collection("qan").updateOne(
                        {
                            _id: new ObjectId(id)
                        },
                        {
                            $set: {
                                input: input,
                                output: output,
                            }
                        }
                    )

                    res.status(200).send({status: 'success', msg: 'Question & Answer Updated'});
                }
            } else {
                return res.status(200).send({status: 'error', msg: 'Same Question & Answer Already Found in the List'});
            }
        } catch(error) {
            res.status(200).send({status: 'error', msg: 'Something went wrong ! Please try again'});
        }
    }
}