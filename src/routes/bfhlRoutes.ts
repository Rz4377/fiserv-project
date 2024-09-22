
import express from 'express';
import { getOperationCode, processData } from '../controllers/bfhlController';

const router = express.Router();

router.get('/', getOperationCode);

router.post('/', processData);

export default router;