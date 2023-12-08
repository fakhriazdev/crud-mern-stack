const prisma = require('../db/index');

const getAllJourneys = async () => {
  const journeys = await prisma.journeys.findMany();
  return journeys;
};

module.exports = {
  getAllJourneys,
};
