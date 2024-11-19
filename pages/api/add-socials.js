import { connectDatabase } from "@/core/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle OPTIONS preflight request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Handle POST request
    if (req.method === "POST") {
        try {
            const { youtube_link, facebook_link, twitter_link, tiktok_link, instagram_link } = req.body;

            // Validate URLs
            const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i; // Adjust as necessary
            const links = { youtube_link, facebook_link, twitter_link, tiktok_link, instagram_link };

            for (const [key, value] of Object.entries(links)) {
                if (value && !urlPattern.test(value)) {
                    return res.status(400).json({ status: "error", msg: `Invalid URL for ${key}` });
                }
            }

            // Connect to database
            const db = await connectDatabase();

            // Update the socialDetails collection (assuming a single document)
            const result = await db.collection("socialDetails").updateOne(
                {}, // Query filter, adjust if needed
                {
                    $set: {
                        youtube_link,
                        facebook_link,
                        instagram_link,
                        twitter_link,
                        tiktok_link,
                        date: new Date().toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                        })
                    }
                },
                { upsert: true } // Add this to create a document if none exists
            );

            // Check if the update was successful
            if (result.modifiedCount === 0 && !result.upsertedId) {
                return res.status(500).json({ status: "error", msg: "Failed to update social information" });
            }

            res.status(200).json({ status: "success", msg: "Social information updated" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", msg: "Internal server error" });
        }
    } else {
        // Respond to unsupported methods
        res.status(405).json({ status: "error", msg: "Method not allowed" });
    }
}