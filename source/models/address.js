const Sequelize =require('sequelize')
const sequelize  = require('../database')
const person =require('../models/person')
const address = sequelize.define('Address',{
    // tableName: 'Address',
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull : true
    },
    placeOfBirth:{
        type:Sequelize.STRING,
        allowNull:false
    },
    DOB:{
        type:Sequelize.STRING,
        allowNull:false
        },
    Regaddr:{
        type:Sequelize.STRING,
        allowNull:false
        },
        
    }, {
        freezeTableName:true,
        timestamps:false
        
      })
    
    //   address.hasOne(person,{foreignKey:"personId",allowNull:false}),

    //   person.belongsTo(address,{foreignKey:"personId",allowNull:false})
      
 
    
    
    module.exports = address