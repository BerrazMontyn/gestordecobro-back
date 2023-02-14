const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("customers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identityCard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
