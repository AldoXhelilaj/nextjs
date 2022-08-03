import { MongoClient } from 'mongodb';


 export  default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const data = req.body;
        const { title, description, image, address } = data;

        const uri = "mongodb+srv://aldo:aldo@cluster0.w2nwehf.mongodb.net/meetups?retryWrites=true&w=majority";
        const client = await MongoClient.connect("mongodb+srv://aldo:aldo@cluster0.w2nwehf.mongodb.net/meetups?retryWrites=true&w=majority");
 
            const collection = client.db().collection("meetups");
            // perform actions on the collection object

           const result = await collection.insertOne(data);

           console.log(result)

            client.close();

            res.status(201).json({message: "DATA SENT"})


    } else {
        // Handle any other HTTP method
    }
}