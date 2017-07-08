import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';
import { cartData, productsData, productsImagesData } from './db/data';

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
app.use('/cart', cors(), (req, res) => {
  const cart = {};
  const total = cartData.products.reduce((acc, next) => {
    const { price } = productsData.find(el => el.id === next.id);
    return acc + (price * next.qty);
  }, 0);
  Object.assign(cart, cartData, { total });
  res.end(JSON.stringify(cart));
});
app.use('/products', cors(), (req, res) => {
  const prodIds = req.query.products.split(',');
  const productsFilterd = productsData.filter(prod => prodIds.indexOf(prod.id) > -1);
  res.end(JSON.stringify(productsFilterd));
});
app.use('/productsImages', cors(), (req, res) => {
  const imgIds = req.query.ids.split(',');
  const imagesFiltered = productsImagesData.filter(img => imgIds.indexOf(img.id) > -1);
  res.end(JSON.stringify(imagesFiltered));
});


app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
});

// eslint-disable-next-line
console.log(`*** Server is Running on port: ${PORT}***`);
