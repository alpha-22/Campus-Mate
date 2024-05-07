
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
        subject_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        day: {
          type: DataTypes.STRING,
          allowNull: false
        },
        time_slot: {
          type: DataTypes.TIME,
          allowNull: false
        },
        classroom: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });
    return Timetable;
      };
    
    