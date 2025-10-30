import express from 'express';
import { router } from './routes/veiculo_rota.js';

let server = express();
server.use(express.json())

server.use("/", router);
server.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});