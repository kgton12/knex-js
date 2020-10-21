const knex = require('../database');
module.exports = {
  async index(req, res) {
    const results = await knex('users')
    .where('deleted_at','0000-00-00 00:00:00')//padrão mysql 

    return res.json(results);
  },
  async create(req, res, next) {
    try {
      const { username } = req.body;
      await knex('users').insert({
        username
      })
      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next){
    try {
      const { username } = req.body;
      const { id } = req.params;
      await knex('users').update({username}).where({id})
      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next){
    try {
      const { id } = req.params

      await knex('users')
        .where({ id })
        .update('deleted_at', new Date())
        //.del()// não ira apagar mais o user e sim fazer um update no campo deleted_at
      return res.send()
    } catch (error) {
      next(error)
    }
  }
}