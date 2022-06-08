const
 mongoose = require('mongoose'),
categorySchema = new mongoose.Schema({
    category:{type:String, require:true}
}),
categoryModel = mongoose.model('categories', categorySchema)

module.exports = categoryModel