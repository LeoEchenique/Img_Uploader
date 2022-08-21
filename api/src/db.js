require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose")
const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env;
const PORT = process.env.PORT || 3001;
/* 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/uploader`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
}); */

/* const sequelize = new Sequelize(`mongodb+srv://img_loader:becWpKb1N1bjLtU0@cluster0.lklcbc5.mongodb.net/?retryWrites=true&w=majority`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

 */
//  mongodb+srv://img_loader:<password>@cluster0.lklcbc5.mongodb.net/?retryWrites=true&w=majority

// mongoDB connection=

mongoose
    .connect(`mongodb+srv://img_loader:${DB_PASSWORD}@cluster0.lklcbc5.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log(`listening on port ${PORT}`))


/* const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(conn));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(conn.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
conn.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Image } = sequelize.models;

// Aca vendrian las relaciones



// Product.hasMany(Reviews);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: conn,     // para importart la conexión { conn } = require('./db.js');
}; */