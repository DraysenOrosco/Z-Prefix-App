/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      id: 1, 
      user_id: 1,
      name: 'Boxes',
      description: 'cardboard boxes for shipping',
      quantity: 20
    },
    {
      id: 2, 
      user_id: 2,
      name: 'Tape',
      description: 'Packing tape',
      quantity: 50
    },
    {
      id: 3, 
      user_id: 3,
      name: 'Stickers',
      description: 'Thank you sticker',
      quantity: 100
    },
  ]);
};
