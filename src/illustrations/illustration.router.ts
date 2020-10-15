import express from 'express';
import Illustration from './illustration.entity';

const illustrationRouter = express.Router();

illustrationRouter.get('/', async (req, res) => {
  try {
    const illustrations = await Illustration.find();

    return res.render('illustrations/index', {
      illustrations,
    });
  } catch (err) {
    return res.sendStatus(500);
  }
});

export default illustrationRouter;
