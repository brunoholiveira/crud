import connect from "../config/connection.js";

let veiculo = {}
let con = await connect()

veiculo.create = async function (req, res) {
    try {
        let veiculo = req.body;
        let sql = "INSERT INTO veiculo (placa_veiculo, modelo_veiculo, preco_veiculo) VALUES (?, ?, ?);";
        let values = [veiculo.placa_veiculo, veiculo.modelo_veiculo, veiculo.preco_veiculo];
        let result = await con.query(sql, values);
        res.send({
            status:"Insert efetuado com sucesso",
            result:result
        })
    } catch (e) {
        console.log("deu erro ao inserir", e)
    }
}

veiculo.all = async function (req, res) {
    try {
        let sql = "SELECT * FROM veiculo;";
        let result = await con.query(sql);
        res.send(JSON.stringify({status:200, error:null, response: result[0]}));
    } catch (e) {
        console.log("deu erro ao consultar", e)
    }
}

veiculo.delete = async function (req, res) {
    try {
        let veiculo = req.body;
        let sql = "DELETE from veiculo where placa_veiculo = ?;";
        let values = [veiculo.placa_veiculo];
        let result = await con.query(sql, values);
        res.send({
            status:"Delete efetuado com sucesso",
            result:result
        })
    } catch (e) {
        console.log("deu erro ao deletar", e)
    }
}
        

export default veiculo;