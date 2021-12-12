class Tables {
  initi(connection) {
    this.connection = connection;
    this.createPromotions();
  }

  createPromotions() {
    const sql =
      "CREATE TABLE IF NOT EXISTS promotions (id SMALLINT NOT NULL AUTO_INCREMENT, gtin CHAR(14) NOT NULL," +
      "description TEXT NOT NULL, category VARCHAR(255) NOT NULL, regularPrice VARCHAR(255) NOT NULL," +
      "promotionalPrice VARCHAR(255) NOT NULL, startDate VARCHAR(255) NOT NULL, endDate VARCHAR(255) NOT NULL," +
      "PRIMARY KEY(id))";

    this.connection.query(sql, (erro) => {
      if (erro) {
        console.log(error);
      } else {
        console.log("Table Created");
      }
    });
  }
}

module.exports = new Tables();
