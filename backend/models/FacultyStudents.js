
module.exports = (sequelize, DataTypes) => {
    const FacultyStudents = sequelize.define('FacultyStudents', {
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
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      
    return FacultyStudents;
      };
    
    