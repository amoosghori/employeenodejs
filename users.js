'use strict';
module.exports = function(sequelize,DataTypes) {
    var User = sequelize.define('users',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        age:DataTypes.INTEGER,
    },{
    classMethod:{
        associated:function(model){

            }
        }
    });
    return User;
}