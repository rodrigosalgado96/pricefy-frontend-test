const repository = require('../repositories/promotion')

class Promotion {
  add(promotion, res) {
    return repository.add(promotion).then((results) => {
      const id = results.insertId;
      return { ...promotion, id };
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

module.exports = new Promotion();
