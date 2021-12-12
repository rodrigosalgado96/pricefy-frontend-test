const conexao = require('./connection')

const executeQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (errors, resultados, campos) => {
            if (errors) {
                reject(errors)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executeQuery