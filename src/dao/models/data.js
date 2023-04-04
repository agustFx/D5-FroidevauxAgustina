function validateId(value){
    if (typeof value !== 'string') 
    throw new Error('Inserte cadena de caracteres')
    if (isNaN(Number(value))) 
    throw new Error('Ingrese caracteres numéricos')
    if (!Number.isInteger(Number(value))) 
    throw new Error('DNI contiene solo números enteros')
    return value
}

function validateTitle(value){
    if (!value) 
    throw new Error('El título no puede estar vacío')
    return value
}

function validateDescription(value){
    if (!value) 
    throw new Error('La descripción no puede estar vacía')
    return value
}

function validatePrice(value){
    if (isNaN(Number(value))) 
    throw new Error('Ingrese solo caracteres numéricos')
    return value
}

function validateThumbnail(value){
    if (!value) 
    throw new Error('Thumbnail no puede estar vacío')
    return value
}

function validateCode(value){
    if (isNaN(Number(value))) 
    throw new Error('Ingrese solo caracteres numéricos')
    if (!Number.isInteger(Number(value))) 
    throw new Error('Ingrese solo números enteros')
    return value
}

function validateStock(value){
    if (isNaN(Number(value))) 
    throw new Error('Ingrese solo caracteres numéricos')
    if (!Number.isInteger(Number(value))) 
    throw new Error('Ingrese solo números enteros')
    return value

}
function validateCart(value){
    if (isNaN(Number(value))) 
    throw new Error('Ingrese solo caracteres numéricos')
    if (!Number.isInteger(Number(value))) 
    throw new Error('Ingrese solo números enteros')
    return value
}



export class dataProducts {
    constructor({ id, title, description, price, thumbnail, code, stock }) {
        this.id = validateId(id)
        this.title = validateTitle(title)
        this.description = validateDescription(description)
        this.price = validatePrice(price)
        this.thumbnail = validateThumbnail(thumbnail)
        this.code = validateCode(code)
        this.stock = validateStock(stock)
    }
}

export class dataCarts {
    constructor({ id }) {
        this.id = validateId(id)
        this.carts = validateCart([])
    }
}
