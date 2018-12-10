module.exports = (sequelize, DataTypes) => {
	
    var singes = sequelize.define('singes', {
      Nom: DataTypes.STRING,
      Race: DataTypes.STRING,
      Age: DataTypes.INTEGER
    });
  
    return singes;
  };