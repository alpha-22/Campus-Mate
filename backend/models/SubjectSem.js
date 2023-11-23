module.exports = (sequelize, DataTypes) => {
    const SubjectSem = sequelize.define("SubjectSem", {
      Sem: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SubCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
      },
      Seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return SubjectSem;
  };