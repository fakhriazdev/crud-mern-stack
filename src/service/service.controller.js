const express = require('express');
const { getAllServices } = require('./service.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const services = await getAllServices();
  res.send(services);
});
module.exports = router;
