const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.get('/physicians', (req, res) => {
    db.getPhysicians().then(results => {
        res.json(results);
    })
    .catch(() => {
        res.status(500).end();
    })
})

app.get('/appointments/ID:=ID&date=:date', (req, res) => {
    db.getAppointments(req.body.ID, req.body.date).then(results => {
        res.json(results);
    })
    .catch(() => {
        res.status(500).end();
    })
  });
  
  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });