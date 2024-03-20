import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Snippet = db.define("Snippet", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codeLanguage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stdin: {
    type: DataTypes.TEXT,
  },
  sourceCode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Snippet;
