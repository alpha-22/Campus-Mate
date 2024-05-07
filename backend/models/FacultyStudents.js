
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
        subject_name: {
          type: DataTypes.STRING
        },
        notified: {
          type: DataTypes.INTEGER
        },
        student_id: {
          type: DataTypes.INTEGER
        },
        faculty_name: {
          type: DataTypes.STRING
        },
        student_name: {
          type: DataTypes.STRING
        }
      });
      
    return FacultyStudents;
      };
    
    