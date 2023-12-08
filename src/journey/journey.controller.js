const express = require('express');
const { getAllJourneys } = require('./journey.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const journeys = await getAllJourneys();
  res.send(journeys);
});
module.exports = router;
