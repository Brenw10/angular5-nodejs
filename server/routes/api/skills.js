import express from 'express';
import skill from '../../services/skill';

const router = express.Router();

router.get('/', function (req, res) {
    skill.getSkills().then(data => res.send(data));
});

router.post('/', function (req, res) {
    const name = req.body.name;
    skill.createSkill(name).then(data => res.send(data));
});

export default router;