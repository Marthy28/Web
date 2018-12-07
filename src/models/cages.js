module.exports = (sequelize, DataTypes) => {
	    var cages = sequelize.define('singes', {
     Id : DataTypes.INTEGER
    });  
    return cages;
  };