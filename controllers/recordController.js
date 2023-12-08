import status from 'http-status'
import RecordModel from '../models/recordModel.js';

export const createRecord = async (req, res) => {
    try {
        const { name, email, mobile, address } = req.body
        console.log(req.body);

        let record = await RecordModel.findOne({ email })
        if (record) {
            return res.status(status.BAD_REQUEST).json({
                success: false,
                message: "Email Already Exists..."
            })
        }

         record = await RecordModel.create(req.body)
        res.status(status.CREATED).json({
            success: true,
            message: "Record created successfully...",
            record: record
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error creating records..." + error.message
        })
    }
}


export const getRecord = async (req, res) => {
    try {
        const record = await RecordModel.find()
        console.log(record);
        res.status(status.OK).json({
            success: true,
            record: record
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Getting the results..." + error.message
        })
    }
}

export const updateRecord = async (req, res) => {
    try {
        const { name, email, mobile, address } = req.body

        //we will send the id by through the params, so need to pick the id first.
        const id = req.params.id
        const record = await RecordModel.findByIdAndUpdate(id, req.body)

        //If we didn't find the records then
        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Invalid ID..."
            })
        }
        record.save()

        res.status(status.OK).json({
            success: true,
            message: "Record Updated successfully...",
            record: record
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Updating Record..." + error.message
        })
    }
}

export const deleteRecord = async (req, res) => {
    try {
        const id = req.params.id
        const record = await RecordModel.findById(id)

        //If we didn't find the records then
        if (!record) {
            return res.status(404).json({
                success: false,
                message: 'Invalid Id'
            })
        }

        await record.deleteOne()
        res.json({
            success: true,
            message: "Records deleted successfully..."
        })
    } catch (error) {
        res.status(status.BAD_REQUEST).json({
            success: false,
            message: "Error While Deleting Record..." + error.message
        })
    }
}
