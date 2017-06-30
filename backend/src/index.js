import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (req, res) => res.end('homepage'));

app.listen(8000, (err) => {
  if (err) {
    throw new Error(err);
  }
});
