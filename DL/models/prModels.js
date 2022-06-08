const { boolean } = require('webidl-conversions')

const
    mongoose = require('mongoose'),
    productSchema = new mongoose.Schema({
        id: { type: Number, require: true },
        title: { type: String, require: true },
        price: { type: Number, require: true },
        description: { type: String, require: true },
        category: { type: String, require: true },
        rating: { rate: Number, count: Number },
        isActive: { type: Boolean, default: true, select: false }
    }),
    productModel = mongoose.model('products', productSchema)

module.exports = productModel 