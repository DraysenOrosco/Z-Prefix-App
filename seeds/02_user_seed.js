/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE users CASCADE')
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1, 
      username: 'james', 
      password_hash: 'hello123',
      created_at: new Date()},
    {
      id: 2, 
      username: 'alex', 
      password_hash: 'bye321',
      created_at: new Date()},
    {
      id: 3, 
      username: 'sam',  
      password_hash: 'hey213',
      created_at: new Date()}
  ]);
};
