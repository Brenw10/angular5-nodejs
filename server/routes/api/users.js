import express from 'express';
import user from '../../services/user';

const router = express.Router();

router.get('/', function (req, res) {
  user.getUsers().then(data => res.send(data));
});

router.post('/', function (req, res) {
  user.createUser(req.body.name).then(data => res.send(data));
});

router.get('/:id', function (req, res) {
  user.getUserById(req.params.id).then(data => res.send(data));
});

router.post('/:userId/skills/:skillId', function (req, res) {
  const data = {
    userId: req.params.userId,
    skillId: req.params.skillId,
    value: req.body.value
  };
  user.setUserSkill(data).then(data => res.send(data)).catch(console.log);
});

export default router;