import { connectDatabase } from "@/core/db";
import { change_str_to_slug } from "@/core/util";
import { ObjectId } from "mongodb";
import cloudinary from 'cloudinary';

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        let {id, title, slug, desc, featured, imgId, category, boxes, disclaimer, tags} = req.body;
        if(!title || title.trim() === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the title'});
        }

        if(!desc || desc.trim() === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the description'});
        }
        
        if(!slug || slug.trim() === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the slug'});
        }

        if(!category || category.trim() === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the description'});
        }

        if(id == null && featured === null) {
            return res.status(200).send({status: 'error', msg: 'Please upload the featured image'});
        }

        if(!boxes || boxes[0].heading === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the heading for the box ! Atleast one box is compulsary'});
        }

        // if(!boxes || boxes[0].subheading === null) {
        //     return res.status(200).send({status: 'error', msg: 'Please enter the subheading for the box ! Atleast one box is compulsary'});
        // }

        // if(!boxes || boxes[0].desc === null) {
        //     return res.status(200).send({status: 'error', msg: 'Please enter the description for the box ! Atleast one box is compulsary'});
        // }

        // if(!boxes || boxes[0].image === null) {
        //     return res.status(200).send({status: 'error', msg: 'Please upload the image for the box ! Atleast one box is compulsary'});
        // }

        if(!tags || tags === null) {
            return res.status(200).send({status: 'error', msg: 'Please enter the tags'});
        }

        let query;
        let objectId = id != null ? new ObjectId(id) : null;
        if(id == null) {
            query = {title: title, category: category};
        } else {
            query = {title: title, category: category, _id: {$ne: objectId}};
        }

        let db = await connectDatabase();
        let find = await db.collection("articles").findOne(query);
        if(find) {
            return res.status(200).send({status: 'error', msg: 'Same details found ! try to create unique content'});
        }

        if(objectId == null) {
             await db.collection("articles").insertOne({
                title: title,
                slug: slug,
                category: category,
                tags: tags,
                boxes: boxes,
                disclaimer: disclaimer,
                desc: desc,
                featured: featured,
                imgId: imgId,
                date: new Date().toLocaleDateString("en-US" , {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })
             });

             res.status(200).send({status: 'success', msg: 'New Content Added'});
        } else {
             await db.collection("articles").updateOne({
                _id: ObjectId,
             }, {
                $set: {
                    title: title,
                    slug: slug,
                    category: category,
                    tags: tags,
                    boxes: boxes,
                    disclaimer: disclaimer,
                    desc: desc,
                    featured: featured,
                    imgId: imgId
                 }
             });

             res.status(200).send({status: 'success', msg: 'New Content Updated'});
        }
    }
}