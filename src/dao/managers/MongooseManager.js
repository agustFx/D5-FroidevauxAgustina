import mongoose from "mongoose"

export class ManagerMongoose {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, new mongoose.Schema(schema, { versionKey: false }))
    }
    async create(registro) {
        return await this.collection.create(registro)
    }

    async read() {
        return await this.collection.find({}).lean()
    }

    async add() {
        return await this.collection.insertOne()
    }

    async getById(id){
        return await this.collection.findOne({id})
    }

    async update(){
        return await this.collection.updateOne()
    }

    async delete(){
        return await this.collection.deleteOne()
    }
}