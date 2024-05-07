
module.exports = (sequelize, DataTypes) => {
const Faculty = sequelize.define('Faculty', {
  faculty_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    default:null
  },
  designation:{
    type: DataTypes.STRING,
    default:null
  },
  dob: {
    type: DataTypes.DATEONLY, 
    allowNull: true 
  }
});
return Faculty;
  };

