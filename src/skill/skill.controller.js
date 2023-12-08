const express = require('express');
const router = express.Router();
const {
  getAllSkills,
  createSkill,
  deleteSkillById,
  patchSkillById,
} = require('./skill.service');
const prisma = require('../db/index');

router.get('/', async (req, res) => {
  const skills = await getAllSkills();
  res.send(skills);
});

router.post('/', async (req, res) => {
  const newSkillData = req.body;
  const file = req.files;
  console.log(file);
  // if (
  //   newSkillData.desription === undefined ||
  //   newSkillData.title === undefined ||
  //   file === null
  // ) {
  //   res.send('some field is missing');
  // }
  // const skill = await createSkill(newSkillData, file);
  // res.send({
  //   data: skill,
  //   message: 'Create Skill successfully!',
  // });
});

router.delete('/:id', async (req, res) => {
  const skillId = req.params.id;
  await deleteSkillById(skillId);
  res.send('Skill deleted successfully');
});

router.patch('/:id', async (req, res) => {
  const skillId = req.params.id;
  const skillData = req.body;
  await patchSkillById(skillId, skillData);

  res.send('Skill updated successfully');
});

//details skills
// app.get('/:id', async (req, res) => {
//   const skillId = req.params.id;
//   const skill = await prisma.skill.findUnique({
//     where: {
//       id: skillId,
//     },
//   });

//   if (!skill) {
//     return res.send(404).send('skill not found');
//   }
//   return res.send(skill);
// });

module.exports = router;
