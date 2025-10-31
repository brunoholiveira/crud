import express from 'express';
import { router } from './routes/veiculo_rota.js';

let server = express();
server.use(express.json())

let port = process.env.PORT || 3000;

server.use("/", router);
server.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`);
});