const prisma = require('../db/index');

const getAllTestimonials = async () => {
  const testimonials = await prisma.testimonies.findMany();
  return testimonials;
};

module.exports = {
  getAllTestimonials,
};
