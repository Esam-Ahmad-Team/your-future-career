'use strict';

const jobModel = (sequelize, DataTypes) => 
sequelize.define('job_table', {
  title: { 
    type: DataTypes.STRING, 
    required: true 
  },
  experienceLevel: { 
    type: DataTypes.ENUM('entry-level', 'mid-senior', 'senior','director'),
    defaultValue: 'entry-level',
    required: true 
  },
  companyName: { 
    type: DataTypes.STRING, 
    required: true 
  },
  opinion: { 
    type: DataTypes.STRING, 
  }
});
module.exports = jobModel;
