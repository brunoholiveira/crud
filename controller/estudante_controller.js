import connect from "../config/connection.js";

let estudante = {}
let con = await connect()

estudante.create = async function (req, res) {
    try {
        let estudante = req.body;
        let sql = "INSERT INTO estudante (matricula, nome_estudante, cidade_estudante) VALUES (?, ?, ?);";
        let values = [estudante.matricula, estudante.nome_estudante, estudante.cidade_estudante];
        let result = await con.query(sql, values);
        res.send({
            status:"Insert efetuado com sucesso",
            result:result
        })
    } catch (e) {
        console.log("deu erro ao inserir", e)
    }
}

estudante.all = async function (req, res) {
    try {
        let sql = "SELECT * FROM estudante;";
        let result = await con.query(sql);
        res.send(JSON.stringify({status:200, error:null, response: result[0]}));
    } catch (e) {
        console.log("deu erro ao consultar", e)
    }
}
        

export default estudante;