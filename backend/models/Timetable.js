
module.exports = (sequelize, DataTypes) => {
    const Timetable = sequelize.define('Timetable', {
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
        day: {
          type: DataTypes.STRING,
          allowNull: false
        },
        start_time: {
          type: DataTypes.TIME,
          allowNull: false
        },
        end_time: {
          type: DataTypes.TIME,
          allowNull: false
        }
      });
    return Timetable;
      };
    
    