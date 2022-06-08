const prControler = require('../DL/controlers/prControler')

const read = async (id) => await prControler.read(id),
createProduct = async (newData) => await prControler.createProduct(newData)

async function updateProduct(id, newData) {
    const found = await prControler.findById(id)
    if (!found) throw `product ${id} dosent exsist`
    return await prControler.createProduct(id, newData)
}

async function deleteProduct(id) {
    const found = await prControler.findById(id)
    if (!found) throw `product ${id} dosent exsist`
    return await prControler.createProduct(id)
}

module.exports = { read, createProduct, updateProduct, deleteProduct }
