module.exports = (sequelize, DataTypes) => {
    const StudentLogin = sequelize.define("StudentLogin", {
      Sid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return StudentLogin;
  };