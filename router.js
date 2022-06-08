module.exports = function approuter(app) {

    const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"],
        category = require('./store.json')

    const blProducts = require('./BL/blProducts')


    app.get('/categories', (req, res) => {
        try {
            res.send(categories)
        } catch (error) {
            console.log(error.message || error)
        }
    })


    app.get('/category/:name', async (req, res) => {
        try {
            const cat = await blProducts.read()
            res.send(cat.filter(p => p.category == req.params.name))
            // res.send(category.filter(p => p.category == req.params.name))
        } catch (error) {
            console.log(error.message || error)
        }
    })

    app.get('/category/product/:id', (req, res) => {
        try {
            res.send(category.find(p => p.id == req.params.id))
        } catch (error) {
            console.log(error.message || error)
        }
    })

    app.post('/create', async (req, res) => {
        try {
            res.send(await blProducts.createProduct(req.body))
        } catch (error) {
            console.log(error.message || error)
        }
    })

    app.put('/update', async (req, res) => {
        try {
            res.send(await blProducts.updateProduct('6298c15c072e48809d5b9bc8', req.body))
        } catch (error) {
            console.log(error.message || error)
        }
    })

}
