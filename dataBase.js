import { MongoClient } from "mongodb";
import express from "express"
import ViteExpress from "vite-express"


const DATABASE_URL = "mongodb+srv://benjismi06:AiEDFRTsJHHt7b68@twitter.vz9z2.mongodb.net/?retryWrites=true&w=majority&appName=Twitter"


const app = express()

const client = new MongoClient(DATABASE_URL);
const database = client.db('Twitter');
app.use(express.json())





app.get("/message", async(_, res) => res.send("erer"));

app.get("/api/post", async(_,response) => {
    const tweets = database.collection('post');
    
    response.json(await tweets.find().sort({_id: -1}).toArray())
})


///her fanger data
app.post("/api/send", async(request,response) => {
    const tweets = database.collection('post');
    await tweets.insertOne(request.body);
    
    console.log(request.body)
})

ViteExpress.listen(app, 3000, async() => console.log("server is running"));