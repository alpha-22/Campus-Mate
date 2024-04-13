
module.exports = (sequelize, DataTypes) => {
    const FacultySubjects = sequelize.define('FacultySubjects', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        faculty_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        subject_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
    return FacultySubjects;
      };
    
    