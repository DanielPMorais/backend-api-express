import express from 'express';
import { getPublicationsController } from '../controllers/publication/getPublicationsController.js';
import { createPublicationController } from '../controllers/publication/createPublicationController.js';
import { updatePublicationController } from '../controllers/publication/updatePublicationController.js';
import { updateTitlePublicationController } from '../controllers/publication/updateTitlePublicationController.js';
import { deletePublicationController } from '../controllers/publication/deletePublicationController.js';

const router = express.Router();

router.get('/', getPublicationsController);
router.post('/', createPublicationController);
router.put('/:id', updatePublicationController);
router.patch('/:id', updateTitlePublicationController);
router.delete('/:id', deletePublicationController);

export default router;