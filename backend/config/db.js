import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.AIVEN_MYSQL_URL, {
  dialect: "mysql",
});

export default sequelize;
