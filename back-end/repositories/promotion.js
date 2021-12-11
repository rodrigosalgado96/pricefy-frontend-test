const query = require('../infraestrutura/database/queries')

class Promotion{
    add(atendimento){
        const sql = 'INSERT INTO promotions SET ?'
        return query(sql, atendimento)
    }

    get(){
        const sql = 'SELECT * FROM promotions'

        return query(sql)
    }

    getById(id){
        const sql = `SELECT * FROM promotions WHERE id=?`

        return query(sql, id)
    }

    edit(id, valores){
        const sql = 'UPDATE promotions  SET ? WHERE id=?'

        return query(sql, [valores, id])
    }

    delete(id){
        const sql = 'DELETE FROM promotions WHERE id=?'
        return query(sql, id)
    }
}

module.exports = new Promotion()