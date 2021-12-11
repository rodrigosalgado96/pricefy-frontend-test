const customExpress = require('./config/customExpress');
const connection = require('./infraestrutura/database/connection');
const tables = require('./infraestrutura/database/tables');

const app = customExpress();

connection.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('connected');
        tables.initi(connection);
        app.listen(3000, () => {
            console.log('Server on port 3000');
        });

    }
});