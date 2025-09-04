/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('name').notNullable();
      table.text('description');
      table.integer('quantity').defaultTo(0);
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');
  };
  