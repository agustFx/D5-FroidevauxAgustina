import { ManagerMongoose } from './MongooseManager.js'

const cartsManager = new ManagerMongoose('carts', {
    id: { type: String, required: true },
    carts: { type: Number, required: true },
})

export default cartsManager