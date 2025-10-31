import connect from "../config/connection.js";

let veiculo = {};

veiculo.create = async function (req, res) {
  try {
    let con = await connect();
    let veiculo = req.body;
    let sql =
      "INSERT INTO veiculo (placa_veiculo, modelo_veiculo, preco_veiculo) VALUES (?, ?, ?);";
    let values = [
      veiculo.placa_veiculo,
      veiculo.modelo_veiculo,
      veiculo.preco_veiculo,
    ];
    let result = await con.query(sql, values);
    res.send({
      status: "Insert efetuado com sucesso",
      result: result,
    });
  } catch (e) {
    console.log("deu erro ao inserir", e);
    throw e;
  }
};

veiculo.all = async function (req, res) {
  try {
    let con = await connect();
    let sql = "SELECT * FROM veiculo;";
    let result = await con.query(sql);
    res.send(JSON.stringify({ status: 200, error: null, response: result[0] }));
  } catch (e) {
    console.log("deu erro ao consultar", e);
  }
};

veiculo.findByModel = async function (req, res) {
  try {
    let con = await connect();

    const { modelo } = req.params;

    let sql = "SELECT * FROM veiculo WHERE modelo_veiculo LIKE ?;";
    let values = [`%${modelo}%`];

    let result = await con.query(sql, values);

    res.send(JSON.stringify({ status: 200, error: null, response: result[0] }));
  } catch (e) {
    console.log("Erro ao buscar por modelo");
    res.status(500).send({ status: "Erro no servidor", error: e.message });
  }
};

veiculo.delete = async function (req, res) {
  try {
    let con = await connect();
    let veiculo = req.body;
    let sql = "DELETE from veiculo where placa_veiculo = ?;";
    let values = [veiculo.placa_veiculo];
    let result = await con.query(sql, values);
    res.send({
      status: "Delete efetuado com sucesso",
      result: result,
    });
  } catch (e) {
    console.log("deu erro ao deletar", e);
  }
};

veiculo.update = async function (req, res) {
  try {
    let con = await connect();
    let veiculoP = req.body;

    if (!veiculoP.placa_veiculo) {
      return res.status(400).send({
        status: "ERRO",
        message: "A placa_veiculo é obrigatória para identificar o veículo",
      });
    }
    const [rows] = await con.query(
      "SELECT * FROM veiculo WHERE placa_veiculo = ?",
      [veiculoP.placa_veiculo]
    );

    if (!rows || rows.length === 0) {
      return res.status(404).send({
        status: "ERRO",
        message: "Veículo não encontrando com esta placa",
      });
    }
    let veiculoA = rows[0];
    let veiculo = {
      placa_veiculo: veiculoP.placa_veiculo,
      modelo_veiculo: veiculoP.modelo_veiculo ?? veiculoA.modelo_veiculo,
      preco_veiculo: veiculoP.preco_veiculo ?? veiculoA.preco_veiculo,
    };
    let sql =
      "UPDATE veiculo SET placa_veiculo = ?, modelo_veiculo = ?, preco_veiculo = ? WHERE placa_veiculo = ?";
    let values = [
      veiculo.placa_veiculo,
      veiculo.modelo_veiculo,
      veiculo.preco_veiculo,
      veiculo.placa_veiculo,
    ];
    let result = await con.query(sql, values);
    res.send({
      status: "UPDATE realizado com sucesso",
      result: result,
    });
  } catch (e) {
    console.log("Falha ao realizar o update", e);
    res.status(500).send({
      status: "Falha ao realizar o update",
      error: e.message,
    });
  }
};

export default veiculo;
