const db = require ('../database/models/index')

const controller ={

        index: (req,res) => {
            res.render("index");
        },

        nosotros: (req,res) => {
            res.render("nosotros");
        },

        products: (req,res) => {
            console.log(db.producto)
            db.producto.findAll()
                .then(function(producto){
                    return res.render('products', {producto: producto});
                })
        },

};

module.exports = controller;