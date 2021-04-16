const {DataTypes} = require ("sequelize");
const instance = require ("../connection");

const task = instance.sequelize.define("tasks",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
          type: DataTypes.STRING,
          allowNull: false
      }
},
  {
    // created_at: true,
    // completed_at: true,
    // tableName: "tasks"
    timestamps: false
  }
)

exports.model = task;