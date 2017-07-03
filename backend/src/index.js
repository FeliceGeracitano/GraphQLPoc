import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(
  '/graphql',
  cors(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (req, res) => res.end('homepage'));

app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
});

// eslint-disable-next-line
console.log(`*** Server is Running on port: ${PORT}***`);
