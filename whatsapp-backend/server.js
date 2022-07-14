//importing
import  express  from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import { Timestamp } from "mongodb";
import cors from "cors";
//appconfig
const app = express();
const port = process.env.PORT || 9000;






const pusher = new Pusher({
  appId: "1435367",
  key: "fc2f16762ab1b5f164d6",
  secret: "b74e0a961b7a56b66e0e",
  cluster: "ap2",
  useTLS: true
});

const db = mongoose.connection
db.once('open',()=>{
    console.log('db is connected');
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();
    changeStream.on('change',(change) =>{
        console.log('changed',change);

        if (change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages","inserted",
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                recieved: messageDetails.received,
                
                
            });

        }else{
            console.log('error trigger pusher');
        }
    })
})

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});




//middleware



app.use(express.json());
app.use(cors());


//Dbconfig
const connection_url = 
"mongodb+srv://admin:admin@cluster0.ieamo.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
   
   useNewUrlParser: true,
   useUnifiedTopology:true
});




//????

//api routes
app.get("/",(req,res)=> res.status(200).send('hello world'));
app.get('/messages/sync', (req,res)=>{
    Messages.find((err,data)=>{
        if (err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }

    });
});
app.post("/messages/new",(req,res)=>{
    const dbMessage= req.body
    Messages.create(dbMessage,(err,data)=>{
    if (err){
        res.status(500).send(err);
    } else{
        res.status(201).send(data);
    }
})
});


//listen
app.listen(port,()=>console.log(`listening on localhost:${port}`));