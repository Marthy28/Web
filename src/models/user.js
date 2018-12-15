module.exports = (sequelize, DataTypes) => {
	
    var singes = sequelize.define('singes', {
      Nom: DataTypes.STRING,
      Race: DataTypes.STRING,
      Age: DataTypes.INTEGER,
      Cage : DataTypes.INTEGER
    });
  
<<<<<<< HEAD
    return singes;
  };
=======
  return singes;  
    };
>>>>>>> fe8a1b200f1200e39cdff383b2b7ced8b8713c49
