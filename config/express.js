const express = require('express');
const cors = require('cors');
const bodyParser = require('express');

require('dotenv').config();

const app = express();

// CONFIGURATION AND MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

module.exports = app;
