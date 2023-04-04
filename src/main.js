import express from 'express'
import { engine } from 'express-handlebars'
import handlebars from 'express-handlebars'
import session from 'express-session'

import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'

import { mongodbCnxStr } from './config/mongodb.js'
import PORT from './config/server.js'

import apiRouter from './routers/apiRouter.js'
import cartsRouter from './routers/cartsRouter.js'
import productsRouter from './routers/productsRouter.js'
import viewsRouter from './routers/viewsRouter.js'

const app = express()
await mongoose.connect(mongodbCnxStr)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(session({
    store: new MongoStore({
        mongoUrl: mongodbCnxStr,
        ttl: 3600
    }),
    secret: "ilikechocoandmint",
    resave: false,
    saveUninitialized: false
}))

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)
app.use('/api', apiRouter)
app.use('/carts', cartsRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => {
    console.log(`El servidor está escuchando el puerto ${PORT} :)`)
}) 