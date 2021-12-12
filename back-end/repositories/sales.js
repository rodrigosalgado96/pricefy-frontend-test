const query = require('../infrastructure/database/queries')

class Promotion{
    add(atendimento){
        const sql = 'INSERT INTO sales SET ?'
        return query(sql, atendimento)
    }

    get(){
        const sql = 'SELECT * FROM sales'

        return query(sql)
    }

    getById(id){
        const sql = `SELECT * FROM sales WHERE id=?`

        return query(sql, id)
    }

    edit(id, valores){
        const sql = 'UPDATE sales  SET ? WHERE id=?'

        return query(sql, [valores, id])
    }

    delete(id){
        const sql = 'DELETE FROM sales WHERE id=?'
        return query(sql, id)
    }
}

module.exports = new Promotion()