const prisma = require('../db/index');

const getAllSkills = async () => {
  const skills = await prisma.skill.findMany();
  return skills;
};

const createSkill = async (newSkillData, file) => {
  const skill = await prisma.skill.create({
    data: {
      title: newSkillData.title,
      description: newSkillData.description,
      image: newSkillData.image,
    },
  });
  return skill;
};

const deleteSkillById = async (skillId) => {
  await prisma.skill.delete({
    where: {
      id: skillId,
    },
  });
};

const patchSkillById = async (skillId, skillData) => {
  const skill = await prisma.skill.update({
    where: {
      id: skillId,
    },
    data: {
      title: skillData.title,
      description: skillData.description,
      image: skillData.image,
    },
  });
  return skill;
};

module.exports = {
  getAllSkills,
  createSkill,
  deleteSkillById,
  patchSkillById,
};
