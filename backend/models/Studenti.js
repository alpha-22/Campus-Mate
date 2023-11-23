module.exports = (sequelize, DataTypes) => {
    const Studenti = sequelize.define("Studenti", {
      Sid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sem: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SUB1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SUB2: {
        type: DataTypes.STRING,allowNull: true,
      },
      SUB3: {
        type: DataTypes.STRING,allowNull: true,
      },
      SUB4: {
        type: DataTypes.STRING,allowNull: true,
      },
      SUB5: {
        type: DataTypes.STRING,allowNull: true,
      },
    });
  
    return Studenti;
  };