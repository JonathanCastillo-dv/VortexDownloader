import { Router } from 'express';
import { getAllFiles } from '../controllers/file/file.controller';
const router: Router = Router();

router.get('/urls', getAllFiles);

export default router;
