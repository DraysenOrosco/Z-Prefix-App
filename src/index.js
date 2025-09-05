const express = require('express');
const app = express();
const PORT = 3000;

const knexConfig = require('../knexfile.js')["development"]
const knex = require('knex')(knexConfig);

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Inventory API is running!');
});

app.get('/items', (req, res) => {
  const { user_id } =req.query;

  let query = knex('items').select('*')
  if(user_id){
    query =query.where({user_id})
  }
  query
    .then(items => {

        const fixedItems= items.map(({created_at, updated_at, ...rest }) => rest);
        res.json(fixedItems)
      })
    .catch(error => {
      console.error('Error fetching items:', error)
      res.status(500).json({message: 'Error fetching items' })
    })
  })

  app.post('/items', (req, res) => {
    const{ name, description, quantity, user_id } = req.body;
  
    console.log('incoming POST / Items data')

  if(!name || !description || quantity === undefined || !user_id){
    return res.status(400).json({error: 'Missing Required Info'});
  }

  knex('items')
  .insert({ name, description, quantity, user_id})
  .returning('*')
  .then(([newItem]) =>{
    res.status(201).json(newItem);
  })
  .catch(error => {
    console.error('Error creating item', error)
    res.status(500).json({error: 'failed to create item'})
  })
})

  app.get('/users', (req, res) => {
    knex('users')
    .select('id', 'username', 'created_at')
    .then(users => {

      res.json(users);
    })
    .catch(error => {
      console.error('Error fetching users:', error)
      res.status(500).json({message: 'Error fetching users' })
    })
  })

  app.post('/login', (req, res) =>{
    const {username, password } = req.body;
    
    if(!username || !password){
      return res.status(400).json({error:'Username and Password Required'})
    }

    knex('users')
    .where({ username: username })
    .first()
    .then(user => {
    if(!user || user.password_hash !== password) {
      return res.status(401).json({error: 'Invalid Username or Password'})
    }
    res.json({userId: user.id, username: user.username})
  })
  .catch(err => {
    console.error('Error trying to login', err);
    res.status(500).json({error: 'Something Went Wrong'})
  })
  })
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });