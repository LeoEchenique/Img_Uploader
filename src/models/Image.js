// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//     // defino el modelo para temperamento
//     sequelize.define('image', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: {
//             type: DataTypes.STRING,

//         },
//         url: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     },

//         {
//             timestamps: false,
//             createdAt: false,
//             updatedAt: false

//         });

// };



const mongoose = require("mongoose");

const image = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("image", image);