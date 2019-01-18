const Sequelize = require('sequelize');
const express = require('express')
const app = express();

const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false})

module.exports = db;

