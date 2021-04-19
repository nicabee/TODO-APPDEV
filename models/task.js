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
      },
      createdAt: {
     //   field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      completedAt: {
     //   field: 'completed_at',
        type: DataTypes.DATE
      }
},
  {
    // createdAt: true,
    // completedAt: true,
    // updatedAt: false,
    // deletedAt: false,
    // tableName: "tasks"
    timestamps: false
  }
)

exports.model = task;