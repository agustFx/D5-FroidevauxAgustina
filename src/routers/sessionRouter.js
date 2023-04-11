import { Router } from "express"

const sessionRouter = Router()

sessionRouter.get('/', (req, res) => {
    if(req.session.counter){
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces :P`)
    } else {
        req.session.counter = 1
        res.send("Welcome my friendddd")
    }
})

sessionRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) res.send("Logout oki my frienddd")
        else res.send({status:"Logout ERROR", body: err})
    })
})

sessionRouter.get('/login', (req, res) =>{
    const { username, password } = req.query
    if (username !== "pepe" || password !== "pepito"){
        return res.send("Login failed amigo")
    }

    req.session.user = username
    req.session.admin = true
    res.send("Login sucess amigo")
})

function auth (req, res, next){
    if(req.session?.user === "pepe" && req.session?.admin){
        return next()
    } else{
        return res.status(401).send("error de autorización")
    }
}
sessionRouter.get('/privado', auth, ( req, res ) => {
    res.send("Si estas viendo esto es porque te logeaste amigo")
}) 

export default sessionRouter

