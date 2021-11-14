const db = require('../models')

//create main model
const Product = db.products;

//main work

//1. create product

const addProduct = async (req, res) => {

    //info coming from frontend
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        //set true if got true otherwise false in any other case
        published: req.body.published ?  req.body.published : false,
    }

    //create a new product corresponding to info recieved
    const product = await Product.create(info)

    res.status(200).send(product)
    console.log(product)
}

//2.get all products
const getAllProducts = async (req, res) => {

    let products = await Product.findAll({
        //what all info we want
        // attributes: [
        //     'title',
        //     'price',
        // ] 
    })
    res.status(200).send(products)
}

//3.get single product
const getOneProduct = async (req, res) => {

    //we'll find that  one product by id
    let id = req.params.id

    let product = await Product.findOne({ where: { id: id }   })
    res.status(200).send(product)
}

//4.update product
const updateProduct = async (req, res) => {

    //we'll find that  one product by id which we have to update
    let id = req.params.id

    //update with info in req.body
    const product = await Product.update(req.body , { where: { id: id }   })
    res.status(200).send(product)
}

//5.delete product by id
const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Product.destroy({ where: { id: id }   })
    res.status(200).send('Product deleted')
}

//6.get published product
const getPublishedProduct = async (req, res) => {

    const products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}

module.exports ={
    addProduct,
    getOneProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getPublishedProduct

}