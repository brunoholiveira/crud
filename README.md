Necessário a criação da tabela no mysql para validação

Iniciar o mysql: mysql -u root -p

CREATE DATABASE veiculo;

USE veiculo;

CREATE TABLE veiculo (
    placa_veiculo VARCHAR(10) PRIMARY KEY,
    modelo_veiculo VARCHAR(100) NOT NULL,
    preco_veiculo DECIMAL(10, 2) NOT NULL,
);
