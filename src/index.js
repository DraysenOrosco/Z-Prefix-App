const express = require('express');
const app = express();
const PORT = 3000;

const knexConfig = require('../knexfile.js')["development"]
const knex = require('knex')(knexConfig);

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('Inventory API is running!');
});

app.get('/items', (request, response) => {
  knex('items')
    .select('*')
    .then(items => {

      const fixedItems = items.map(item => {
        const {created_at, updated_at, ...rest } = item;
        return rest
      })
      response.json(fixedItems);
    })
    .catch(error => {
      console.error('Error fetching items:', error)
      response.status(500).json({message: 'Error fetching items' })
    })
  })

  app.get('/users', (request, response) => {
    knex('users')
    .select('id', 'username', 'created_at')
    .then(users => {

      response.json(users);
    })
    .catch(error => {
      console.error('Error fetching users:', error)
      response.status(500).json({message: 'Error fetching users' })
    })
  })

  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });