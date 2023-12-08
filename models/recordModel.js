import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim : true,
    },
    email :{
        type : String,
        required : true,
        trim : true,
    },
    mobile :{
        type : Number,
        required : true,
        trim : true,
    },
    address :{
        type : String,
        required : true,
        trim : true,
    }
}, {timestamps : true})

const RecordModel = new mongoose.model("record" , recordSchema)

export default RecordModel