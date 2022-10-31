const Sequelize = require('sequelize')
const sequelize = require('../database')
const address =require('../models/address')
const person = sequelize.define('Person',{
    // tableName: 'Person',
    id :{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull :true
    },
    firstName:{
        type : Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
    
    
  });
person.hasOne(address,{foreignKey:"personId",allowNull:false}),

address.belongsTo(person,{foreignKey:"personId",allowNull:false})







module.exports = person