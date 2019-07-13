const express = require('express');
const router = require('express').Router();
const controller = require('./user.controller');
const inputValidation = require('../validation/user.validation').user;

router.post('/', inputValidation.addValidation, controller.create);

// router.get('/list', controller.list);
// router.get('/user/:id', controller.getuser);
// router.post(
//   '/update/:id',
//   inputValidation.addValidation,
//   controller.updateUser
// );
// router.post('/delete');

router.post('/login', inputValidation.loginValidation, controller.login);

module.exports = router;
