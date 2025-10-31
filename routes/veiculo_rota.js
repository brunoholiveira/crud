import express from 'express';
import veiculo from '../controller/veiculo_controller.js';

let router = express.Router();
router.post('/veiculo', veiculo.create);
router.get('/veiculo', veiculo.all);
router.get('/veiculo/buscar/:modelo', veiculo.findByModel)
router.delete('/veiculo', veiculo.delete);
router.put('/veiculo', veiculo.update);

export {router};
