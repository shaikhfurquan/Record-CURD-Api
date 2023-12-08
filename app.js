import express  from 'express'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routerRecord from './routes/recordRouter.js';


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

app.use('/api' , routerRecord)


mongoose.connect(MONGO_URL).then(()=>{
    console.log(`connected to ${MONGO_URL}`);
}).catch((err)=>{
    console.log('Error connecting to DB');
})

app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
})