const repository = require('../repositories/sales')

class Sale {
  add(sale, res) {
    return repository.add(sale).then((results) => {
      const id = results.insertId;
      return { ...sale, id };
    });
  }

  get(){
      return repository.get()
  }

  getById(id){
      return repository.getById(id)
  }

  edit(id, value){
      repository.edit(id, value)
      return this.getById(id)
  }

  delete(id){
      return repository.delete(id)
  }
}

module.exports = new Sale();
