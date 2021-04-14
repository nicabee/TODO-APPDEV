const {DataTypes} = require ("sequelize");
const instance = require ("../connection");

const user = instance.sequelize.define("users",{
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
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
},
  {
    timestamps: false
  }
)

exports.model = user;