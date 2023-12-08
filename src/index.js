const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors({ origin: true, credentials: true }));
const skillController = require('./skill/skill.controller');
const serviceController = require('./service/service.controller');
const testimonieController = require('./testimonie/testimonie.controller');
const journeyController = require('./journey/journey.controller');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('WELCOME TO MASTER DATA');
});

app.use('/journeys', journeyController);
app.use('/skills', skillController);
app.use('/services', serviceController);
app.use('/testimonies', testimonieController);

app.listen(PORT, () => {
  console.log('flying in Port ' + PORT);
});
