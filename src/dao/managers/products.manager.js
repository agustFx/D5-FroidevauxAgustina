import { ManagerMongoose } from './MongooseManager.js'

const productsManager = new ManagerMongoose('products', {
    id:  { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: Number, required: true },
    stock: { type: Number, required: true }
})

export default productsManager