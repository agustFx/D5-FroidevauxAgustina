import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const collection = 'Users'

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String
})
schema.plugin(mongoosePaginate)
const userModel = mongoose.model(collection, schema)

export default userModel