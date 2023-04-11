import fs from 'fs'

class FileManager{
    constructor(path){
        this.path = path
        this.products = []
        this.carts = []
    }

    addProduct(id, title, description, price, thumbnail, code, stock = new Product ().toLocalProductString()){
        const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        }

        if(this.products.length == 0){
            product.id = 1
        } else{
            product.id = this.products[this.products.length -1].id +1
        }

        this.products.push(product)

        const productsJson = JSON.stringify(this.products)
        fs.promises.writeFile('database/products.json', productsJson)
    }

    addProduct(id, title, description, price, thumbnail, code, stock = new Product ().toLocalProductString()){
        const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        }

        if(this.products.length == 0){
            product.id = 1
        } else{
            product.id = this.products[this.products.length -1].id +1
        }

        this.products.push(product)

        const productsJson = JSON.stringify(this.products)
        fs.promises.writeFile('database/products.json', productsJson)
    }

    addCart(id, products = new Cart ().toLocalProductString()){
        const cart = {
            id,
            products: []
        }

        if(this.carts.length == 0){
            cart.id = 1
        } else{
            cart.id = this.carts[this.carts.length -1].id +1
        }

        this.carts.push(cart)

        const cartsJson = JSON.stringify(this.carts)
        fs.promises.writeFile('database/carts.json', cartsJson)
    }

    async getElements(){
        const elements = await fs.promises.readFile(this.path, 'utf8')
        elements = JSON.parse(elements)
        return elements
    }

    async getElementById(id){
        const elements = await fs.promises.readFile(this.path, 'utf8')
        JSON.parse(elements)
        const isId = elements.filter(e=>e.id===id)
        if(isId){
            return elements
        } else {
            throw new Error ("No se ha encontrado")
        }
    }

    async updateElement(id, dataToUpdate){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter(item => item.id !== id)
        newData = [...newData, {id, ...dataToUpdate}]
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }

    async deleteElement(id){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter(item => item.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }
}

export const prodManager = new FileManager('./database/products.json')
export const cartManager = new FileManager('./database/carts.json')

