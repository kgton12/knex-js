exports.up = knex => knex.schema.alterTable('users', table => {

  table.timestamp('deleted_at')
})

exports.down = knex => knex.schema.dropColumn('users', table => {

  table.timestamp('deleted_at')
})

