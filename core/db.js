import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import { notFound } from 'next/navigation';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDNAME || "dfvn8crqd",
    api_key: process.env.CLOUDKEY || "496639791787568",
    api_secret: process.env.CLOUDSECRET || "4q2-Ol8TwelMn5abeAK0VkMP3iM",
    secure: true
});

let client;
let clientPromise;
let uri = process.env.MONGODBURI || 'mongodb+srv://Fritzlade12345:Narcisse2024@cluster0.hhykc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: false,
            deprecationError: true,
        },
    });

    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connectDatabase() {
    const client = await clientPromise;
    return client.db("blogging-app");
}

export async function delete_image_from_cloudinary({imgId}) {
    try {
        await cloudinary.v2.api.delete_resources(imgId);
        return true;
    } catch(error) {
        return false;
    } 
}

export async function upload_image_to_cloudinary({image}) {
    try {
        let upload_stream = {
            secure_url: null,
            public_id: null
        }

        upload_stream = await cloudinary.v2.uploader.upload(image, {
            resource_type: 'image',
            folder: '',
            format: 'webp'
        })
        
        return {
            secure_url: upload_stream.secure_url,
            public_id: upload_stream.public_id
        }
    } catch(error) {
        return {
           status: 'error'
        }
    }
}

export async function getAllFeedbacks() {
    let db = await connectDatabase();
    try {
        let find = await db.collection("feedbacks").find({}).toArray();
        if(!find || find.length <= 0) {
           return {
               notFound: true
           }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getAllContacts({search}) {
    let db = await connectDatabase();
    try {
        let find = await db.collection("contacts").find({}).toArray();
        if(!find || find.length <= 0) {
           return {
               notFound: true
           }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getAllCategories({id, search}) {
    try {
        let db = await connectDatabase();
        if(id != null) {
           let objectId = new ObjectId(id);
           let find = await db.collection("categories").find({_id: objectId}).toArray();
           try {
              let data = find.map((d, k) => ({
                ...d,
                _id: d._id.toString()
              }));

              data.forEach((d, k) => {
                  cloudinary.v2.api.delete_resources(d.imgId)
              })
           } catch(error) {
              console.log("Image Not Deleted");
           }

           await db.collection("categories").deleteOne({_id: objectId})
        }


        
        let value = search != null && search != '' ? {title: {
            $regex: search,
            $options: "i"
        }} : {};

        let find = await db.collection("categories").find(value).toArray();

        if(!find || find.length <= 0) {
            return {
                notFound: true
            }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getCategoryById({id}) {
    let db = await connectDatabase();
    try {
        let objectId = new ObjectId(id);
        let find = await db.collection("categories").find({_id: objectId}).toArray();

        if(!find || find.length <= 0) {
            return {
                notFound: true
            }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getAllArticles({id , category}) {
    try {
        let db = await connectDatabase();
        if(id !== null && id !== "") {
           let objectId = new ObjectId(id);
           let find = await db.collection("articles").find({_id: objectId}).toArray();
           try {
              let data = find.map((d, k) => ({
                ...d,
                _id: d._id.toString()
              }));

              data.forEach((d, k) => {
                  cloudinary.v2.api.delete_resources(d.imgId)
                  d.boxes.forEach((d2, k2) => {
                    cloudinary.v2.api.delete_resources(d2.imgId)
                  })
              })
           } catch(error) {
              console.log("Image Not Deleted");
           }

           await db.collection("articles").deleteOne({_id: objectId})
        }
        
        let find = await db.collection("articles").find({category: category}).toArray();
        if(!find || find.length <= 0) {
            return {
                notFound: true
            }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getArticleById({id}) {
    let db = await connectDatabase();
    try {
        let objectId = new ObjectId(id);
        let find = await db.collection("articles").find({_id: objectId}).toArray();
        if(!find || find.length < 0) {
            return {
                notFound: true
            }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getArticlesBySlug({slug}) {
    let db = await connectDatabase();
    try {
        let find = await db.collection("articles").find({slug: slug}).toArray();
        if(!find || find.length === 0) {
            return {
                notFound: true
            }
        }

        let data = find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}

export async function getArticlesFor30({category}) {
    let db = await connectDatabase();
    try {
      let find = await db.collection("articles").find({
        category: category,
      }).toArray(); // Add toArray() to retrieve results

      let past30 = new Date(new Date.now() - 30 * 60 * 60 * 24 * 1000);
      let now = new Date();
  
      if (!find || find.length == 0) {
        return {
          notFound: true
        }
      }

      let filter = find.filter((d, k) => {
        const date = new Date(d.date);
        return date >= past30 && date < now;
      })
  
      let data = filter.length;
      return { count: data }; // Return data with key
    } catch (error) {
      return {
        notFound: true,
      }
    }
  }


export async function getContactsFor30() {
    const db = await connectDatabase();
    try {
        // Fetch all documents first
        let find = await db.collection("contacts").find().toArray();

        // Get the current date and the date 30 days ago
        const now = new Date();
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        // Filter documents where the date falls within the last 30 days
        find = find.filter(contact => {
            const contactDate = new Date(contact.date);
            return contactDate >= thirtyDaysAgo && contactDate < now;
        });

        if (find.length === 0) {
            return { notFound: true };
        }

        return { count: find.length };
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return { notFound: true };
    }
}

export async function getFeedbacksFor30() {
    const db = await connectDatabase();
    try {
        // Fetch all documents first
        let find = await db.collection("feedbacks").find({}).toArray();

        // Get the current date and the date 30 days ago
        const now = new Date();
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        if (!find || find.length === 0) {
            return { notFound: true };
        }

        // Filter documents where the date falls within the last 30 days
        find = find.filter(contact => {
            const contactDate = new Date(contact.date);
            return contactDate >= thirtyDaysAgo && contactDate < now;
        });

        return { count: find.length };
    } catch (error) {
        return { notFound: true };
    }
}

export async function getArticlesBySearch({search, category}) {
    let db = await connectDatabase();
    try {
        let s = search != null && search != "" ? {
            category: category,
            $or: [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
        } : {}

        let find = await db.collection("articles").find(s).toArray();

        if(!find || find.length === 0) {
            return {
                notFound: true
            }
        }

        let data = await find.map((d, k) => ({
            ...d,
            _id: d._id.toString()
        }))

        return data;
    } catch(error) {
        return {
            notFound: true
        }
    }
}