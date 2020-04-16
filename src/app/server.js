'use strict';

const express = require('express');
const bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Setting for Hyperledger fabric
const { FileSystemWallet, Gateway } = require('fabric-network');
const path    = require('path');
const ccpPath = path.resolve(__dirname, '.', 'connection-org1.json')

// REST-API
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}");
