require('../../db')

const
    productModel = require('../models/prModels'),
    read = async (filter = {}) => await productModel.find({ ...filter, isActive: true }),
    findById = async (id) => await productModel.findById(id),
    createProduct = async (obj) => await productModel.create(obj),
    updateProduct = async (id, newData) => await productModel.findByIdAndUpdate(id, newData, { new: true }),
    deleteProduct = async (id) => await productModel.findByIdAndUpdate(id,{isActive:false})

module.exports = { read, findById, createProduct, updateProduct, deleteProduct }

console.log(findById('6298c15c072e48809d5b9bc8')) 