import express from 'express';
import { createSnippet, getAllSnippets } from '../controllers/snippetsController.js';

const router = express.Router();

router.post('/snippets', createSnippet);
router.get('/snippets', getAllSnippets);

export default router;
