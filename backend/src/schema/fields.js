import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { cartData, productsData } from '../db/data';

const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product description ...',
  fields: {
    id: {
      type: GraphQLString,
      resolve: product => product.id
    },
    imgUrl: {
      type: GraphQLString,
      resolve: product => product.imgUrl
    },
  }
});

const CartType = new GraphQLObjectType({
  name: 'Cart',
  description: 'Cart description...',
  fields: {
    total: {
      type: GraphQLString,
      resolve: cart => cart.total
    },
    description: {
      type: GraphQLString,
      resolve: cart => cart.description
    },
    currency: {
      type: GraphQLString,
      resolve: cart => cart.currency
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: (cart) => {
        const prodIds = cart.products.map(el => el.id);
        return productsData.filter(product => prodIds.includes(product.id));
      }
    }
  }
});

const cart = {
  type: CartType,
  args: {
    sessionID: { type: GraphQLString }
  },
  resolve: () => cartData
};


module.exports = {
  cart
};
