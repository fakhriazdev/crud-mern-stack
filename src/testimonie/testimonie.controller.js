const express = require('express');
const { getAllTestimonials } = require('./testimonie.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const testimonials = await getAllTestimonials();
  res.send(testimonials);
});

module.exports = router;
