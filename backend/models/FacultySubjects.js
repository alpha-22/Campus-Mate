
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
        subject_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        subject_code: {
          type: DataTypes.STRING,
          allowNull: false
        },
        semester: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
    return FacultySubjects;
      };
    
    