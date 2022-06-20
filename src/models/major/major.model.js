'use strict';

const majorModel = (sequelize, DataTypes) => 
sequelize.define('major_table', {
  name: { 
    type: DataTypes.STRING, 
    required: true ,
  },
  university: { 
    type: DataTypes.STRING, 
    required: true ,
  },
  major: { 
    type: DataTypes.ENUM('engineering', 'accounting', 'finance', 'business', 'medicine', 'CS'), 
    defaultValue: 'CS',
    required: true ,
  },
  majorStatus: { 
    type: DataTypes.ENUM('saturated', 'stagnant', 'desired'), 
    defaultValue: 'saturated',
    required: true ,
  },
  studentsNum: { 
    type: DataTypes.FLOAT, 
    required: true ,
  }
});

module.exports = majorModel;
