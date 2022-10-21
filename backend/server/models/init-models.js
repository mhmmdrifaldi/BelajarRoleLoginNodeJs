import Sequelize  from "sequelize";
import config from "../config/config";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect : 'postgres',
    pool : {
      max : 5,
      min : 0,
      acquire : 30000,
      idle : 10000
    }
  }
)

const DataTypes = require("sequelize").DataTypes;
const _Sessions = require("./Sessions");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const Sessions = _Sessions(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  return {
    Sessions,
    products,
    users,
  };
}

const models = initModels(sequelize);
export default models
export {sequelize}

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
