'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const jobModel = require('./job/job.model.js');
const majorModel = require('./major/major.model.js');
const companyModel = require('./company/company.model');

const Collection = require('./data-collection.js');

const userModel = require('../auth/models/users');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
    
  }
} : {};
const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const job = jobModel(sequelize, DataTypes);
const major = majorModel(sequelize, DataTypes);
const company = companyModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  job: new Collection(job),
  major: new Collection(major),
  company: new Collection(company),
  users: userModel(sequelize, DataTypes),
};





