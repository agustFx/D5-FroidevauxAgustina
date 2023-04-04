import { Router } from "express"
const viewsRouter = Router()


viewsRouter.get('/register', (req, res) => {
    res.render('register')
})

viewsRouter.get('/login', (req, res) => {
    res.render('login')
})


export default viewsRouter