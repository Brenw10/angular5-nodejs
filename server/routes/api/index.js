import express from 'express';
import users from './users';
import skills from './skills';

const router = express.Router();

router.use('/users', users);
router.use('/skills', skills);

export default router;