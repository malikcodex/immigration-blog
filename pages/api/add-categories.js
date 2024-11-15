import { connectDatabase, getCategoryById } from "@/core/db";
import cloudinary from 'cloudinary';
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        const {id, title, slug, image} = req.body;
        let objectId = new ObjectId(id);
        if(!title || title.trim() === "") {
            return res.status(200).send({status: 'error', msg: 'Please enter the category name'});
        }

        if(!slug || slug.trim() === "") {
            return res.status(200).send({status: 'error', msg: 'Please enter the slug'});
        }

        let query;
        let uploadStream = {
            public_id: '',
            secure_url: ''
        }

        if(id == null) {
           query = {title: title}
        } else {
           query = {title: title, _id: {$ne: objectId}}
        }

        let db = await connectDatabase();
        let check = await db.collection("categories").findOne(query);
        if(check) {
            return res.status(200).send({status: 'error', msg: 'Please note that same details are already exists'});
        }

        if(id == null) {
          if(image != null) {
            uploadStream = await cloudinary.v2.uploader.upload(image, {
                resource_type: 'image',
                folder: '',
                format: 'webp'
            });
          }

          await db.collection("categories").insertOne({
            title: title,
            slug: slug,
            imgId: uploadStream.public_id,
            image: uploadStream.secure_url,
            date: new Date().toLocaleDateString("en-US" , {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })
          })

          res.status(200).send({status: 'success', msg: 'New Category Added'});
        } else {
            let get_details = await getCategoryById({id: objectId});
            if(!get_details.notFound) {
                if(image != null) {
                    if(get_details[0].imgId !== null || get_details[0].imgId != '') {
                        await cloudinary.v2.api.delete_resources(get_details[0].imgId);
                    }
                    
                    uploadStream = await cloudinary.v2.uploader.upload(image, {
                        format: 'webp',
                        folder: '',
                        resource_type: 'image'
                    });
                }
    
                await db.collection("categories").updateOne({
                    _id: objectId
                },{ 
                    $set: {
                        title: title,
                        slug: slug,
                        imgId: uploadStream.public_id,
                        image: uploadStream.secure_url,
                    }
                })
            }
    
            res.status(200).send({status: 'success', msg: 'Category Updated'});
        }
    }
}