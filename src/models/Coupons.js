const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("coupons", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
