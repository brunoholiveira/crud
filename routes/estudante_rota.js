import express from 'express';
import estudante from '../controller/estudante_controller.js';

let router = express.Router();
router.post('/estudante', estudante.create);
router.get('/estudante', estudante.all);
//router.delete('/estudante/:matricula', estudante.delete);
//router.put('/estudante/:matricula', estudante.update);

export {router};
