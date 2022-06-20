'use strict';

const companyModel = (sequelize, DataTypes) =>
  sequelize.define('company_table', {
    ownerName: {
      type: DataTypes.STRING,
      required: true
    },
    companyName: {
      type: DataTypes.STRING,
      required: true
    },
    employeesNum: {
      type: DataTypes.FLOAT,
    },
    requiredJob: {
    type: DataTypes.STRING,
    required: true
  }
});
module.exports = companyModel;
