import express from 'express';
import Illustration from './illustration.entity';

const illustrationAdminRouter = express.Router();

illustrationAdminRouter.get('/', async (req, res) => {
  try {
    const illustrations = await Illustration.find();

    return res.render('illustrations/admin/index', {
      illustrations,
    });
  } catch (err) {
    return res.sendStatus(500);
  }
});

illustrationAdminRouter.get('/create', (req, res) => {
  return res.render('illustrations/admin/create');
});

export default illustrationAdminRouter;
