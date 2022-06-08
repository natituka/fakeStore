require('../../db')

const
    categoryModel = require('../models/categoryModel'),
    read = async () => await categoryModel.find(),
    createCategory = async (obj) => await categoryModel.create(obj),
    updateCategory = async (id, newUpdate) => await categoryModel.findByIdAndUpdate(id, newUpdate, { new: true }),
    deleteCategory = async (id) => await categoryModel.findByIdAndDelete(id)

module.exports = {read,createCategory,updateCategory,deleteCategory}