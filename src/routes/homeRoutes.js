import { Router } from 'express';
// importando do home controller
import homeController from '../controllers/HomeControllers';

const router = new Router();

router.get('/', homeController.index);

export default router;
