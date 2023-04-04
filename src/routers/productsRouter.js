import { Router } from "express"
import productsManager from '../dao/managers/products.manager.js'
const productsRouter = Router()

productsRouter.get('./', async (req, res) => {
    try{
        let products = productsManager.read()
        res.send({ result: "sucess", playload: products })
    } catch(error) {
        console.log("No se pudieron obtener los productos con mongoose")
    }
})

productsRouter.post('./', async (req, res) => {
    try{
        let product = req.body
        let result = await cartsManager.add(product)
        res.send({ status: "sucess", playload: result })
    } catch(error) {
        console.log("No se puedo agregar el producto")
    }
})

productsRouter.get('./pid', async (req, res) => {
    try{
        let isId = req.params
        let id = await productsManager.getById({isId})
        res.send({ status: "sucess", playload: id })
    } catch(error) {
        console.log("No se encontró el id")
    }
})

productsRouter.get('./pid', async (req, res) => {
    try{
        let dataToUpdate = req.params
        let newProduct = await productsManager.update(dataToUpdate)
        res.send({ status: "sucess", playload: newProduct })
    } catch(error) {
        console.log("No se pudo actualizar el producto")
    }
})

productsRouter.delete('./pim', async (req, res) => {
    try{
        let { key, value } = req.body
        let element = await productsManager.deleteOne({ key,value })
        res.send(`${element} se eliminó correctamente`)
    } catch(error) {
        console.log("No se pudo borrar el elemento")
    }
})

export default productsRouter