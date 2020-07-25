
exports.up = function(knex) {
  return knex.schema('list', table => {
      table.increments();
      table.string('item', 255);
      table.boolean('checked').defaultTo(false);
      table.biginteger('id').defaultTo(Date.now());
      table.boolean('display').defaultTo(true);
  })
};

exports.down = function(knex) {
  
};
