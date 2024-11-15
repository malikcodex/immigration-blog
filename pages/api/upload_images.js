import { getArticleById, upload_image_to_cloudinary, delete_image_from_cloudinary } from '@/core/db';
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method === "OPTIONS") {
        res.status(200).end();
    }

    if(req.method === "POST") {
        try {
            const {img, imgId} = req.body;
            let stream = {
                secure_url: null,
                public_id: null
            }

            if(imgId !== null) {
                await delete_image_from_cloudinary({imgId: imgId});
            }

            if(img !== null) {
                stream = await upload_image_to_cloudinary({image: img});
            }

            res.status(200).send({status: 'success', msg: {secure_url: stream.secure_url, public_id: stream.public_id}});
        } catch(error) {
            res.status(200).send({status: 'error', msg: 'Method not Allowed'});
        }
    }
}