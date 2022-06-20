'use strict';

const express = require('express');
const dataModules = require('../models/index.model');
const bearerAuth = require('../auth/middleware/bearer');
const permissions = require('../auth/middleware/acl');
const DataCollection = require('../models/data-collection');
const routerv1 = express.Router();

routerv1.param('model', (req, res, next) => {
    const modelName = req.params.model;
    if (dataModules[modelName]) {
      req.model = dataModules[modelName];
      next();
    } else {
      next('Invalid Model');
    }
  });

routerv1.post('/:model', bearerAuth, permissions('createCompany'), handleCreate);//for compOwner and admin
routerv1.post('/:model', bearerAuth, permissions('createMajor'), handleCreate);//for regOfficer and admin
routerv1.put('/:model/:id', bearerAuth, permissions('updateCompany'), handleUpdate);//for compOwner and admin




  
  async function handleCreate(req, res) {
    let obj = req.body;
    let newRecord = await req.model.create(obj);
    res.status(201).json(newRecord);
  }
  
  async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await req.model.update(id, obj)
    res.status(200).json(updatedRecord);
  }
  
  
  
  module.exports = routerv1;
  