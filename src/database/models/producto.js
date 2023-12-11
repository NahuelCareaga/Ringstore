function productoData (sequelize, Datatypes){
    
    let alias = 'producto';

    let cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(50)},
        imagen: {type: Datatypes.STRING(2048)},
        descripcion: {type: Datatypes.STRING(200)}
    }

    let config = {camelCase: false, timestamps: false};

    const producto = sequelize.define(alias, cols, config);

    return producto;

}

module.exports = productoData; 