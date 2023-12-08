import express from 'express';
import { createRecord, deleteRecord, getRecord, updateRecord } from '../controllers/recordController.js';
const routerRecord = express.Router();

routerRecord.post('/create' , createRecord)
routerRecord.get('/getrecord' , getRecord)
routerRecord.put('/:id' , updateRecord)
routerRecord.delete('/:id' , deleteRecord)



export default routerRecord
