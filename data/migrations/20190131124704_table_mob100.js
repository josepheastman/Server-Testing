exports.up = function(knex, Promise) {
  return knex.schema.createTable("characters", tbl => {
    tbl.increments();

    tbl.string("firstName", 255).notNullable();

    tbl.string("lastName", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("characters");
};
