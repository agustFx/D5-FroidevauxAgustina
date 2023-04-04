import { Router } from "express"
import cartsManager from '../dao/managers/carts.manager.js'
const cartsRouter = Router()


cartsRouter.get('./', async (req, res) => {
    try{
        let carts = cartsManager.read()
        res.send({ result: "sucess", playload: carts })
    } catch(error) {
        console.log("No se pudieron obtener los carts con mongoose")
    }
})

cartsRouter.post('./', async (req, res) => {
    try{
        let { id, carts } = req.body
        let result = await cartsManager.add({ id, carts })
        res.send({ status: "sucess", playload: result })
    } catch(error) {
        console.log("No se puedo agregar el cart")
    }
})

cartsRouter.delete('./pim', async (req, res) => {
    try{
        let { key, value } = req.body
        let element = await cartsManager.deleteOne({ key,value })
        res.send(`${element} se eliminó correctamente`)
    } catch(error) {
        console.log("No se pudo borrar el elemento")
    }
})

export default cartsRouter