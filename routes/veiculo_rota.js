import express from 'express';
import veiculo from '../controller/veiculo_controller';

let router = express.Router();
router.post('/veiculo', veiculo.create);
router.get('/veiculo', veiculo.all);
router.delete('/veiculo/:placa_veiculo', veiculo.delete);
router.put('/veiculo/:placa_veiculo', veiculo.update);

export {router};
