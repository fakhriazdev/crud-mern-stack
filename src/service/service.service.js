const prisma = require('../db/index');

const getAllServices = async () => {
  const services = await prisma.services.findMany();
  return services;
};

module.exports = {
  getAllServices,
};
