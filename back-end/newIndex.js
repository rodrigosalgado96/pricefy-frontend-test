const express = require('express')
const bodyParser = require('body-parser')

const { Client } = require('pg')

//Infra - conexao
// const conexao = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'Comau123',
//     port: 5432,
// })
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'naosei74100',
    database: 'volks-test-db'
})


// Custom Express
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Controllers - Comsumo
app.get('/consumo', (req, res) => {
    const sql = 'SELECT * FROM `volks-test-db`.consumo'

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados)
        }
    })
})
app.get('/media', (req, res) => {
    const sql = 'SELECT * FROM `volks-test-db`.consumo'

    conexao.query(sql, (erro, resultados) => {
        const tamanho = resultados.rows.length;
        let soma = 0
        resultados.rows.forEach((el) => soma += el.value)
        const media = parseFloat((soma / tamanho).toFixed(2))
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(media)
        }
    })
})
app.get('/maximo', (req, res) => {
    const sql = 'SELECT * FROM `volks-test-db`.consumo WHERE value = (SELECT MAX(value) FROM consumo)'

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados.rows)
        }
    })
})
app.get('/consumo/:startPeriod/:endPeriod', (req, res) => {
    const startPediod = parseInt(req.params.startPeriod)
    const endPeriod = parseInt(req.params.endPeriod)
    const sql = 'SELECT * FROM `volks-test-db`.consumo WHERE timestamp <= ? AND timestamp >= ?'

    conexao.query(sql, [endPeriod, startPediod],(erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados.rows)
        }
    })
})
app.get('/media/:startPeriod/:endPeriod', (req, res) => {
    const startPediod = parseInt(req.params.startPeriod)
    const endPeriod = parseInt(req.params.endPeriod)
    const sql = 'SELECT * FROM `volks-test-db`.consumo WHERE timestamp <= ? AND timestamp >= ?'

    conexao.query(sql, [endPeriod, startPediod],(erro, resultados) => {
        const tamanho = resultados.rows.length;
        let soma = 0
        resultados.rows.forEach((el) => soma += parseInt(el.value))
        const media = parseFloat((soma / tamanho).toFixed(2))
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(media)
        }
    })
})
app.get('/maximo/:startPeriod/:endPeriod', (req, res) => {
    const startPediod = parseInt(req.params.startPeriod)
    const endPeriod = parseInt(req.params.endPeriod)
    const sql = 'SELECT * FROM `volks-test-db`.consumo WHERE value = (SELECT MAX(value) FROM consumo WHERE timestamp <= ? AND timestamp >= ?)'

    conexao.query(sql, [endPeriod, startPediod],(erro, resultados) => {
        if (erro) {
            res.status(400).json(erro)
        } else {
            res.status(200).json(resultados.rows)
        }
    })
})

//index.js
conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        const sql = "CREATE TABLE IF NOT EXISTS `volks-test-db`.consumo (id int NOT NULL AUTO_INCREMENT, machine varchar(255) NOT NULL, timestamp varchar(255), properties varchar(255) NOT NULL, value numeric NOT NULL, PRIMARY KEY(id))"

        conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela consumo criada com sucesso')
            }
        })

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})