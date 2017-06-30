import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } from 'graphql';
import { cartData, productsData, productsImagesData } from '../db/data';

const ProductImagesType = new GraphQLObjectType({
  name: 'productImages',
  description: 'Product images descriptions...',
  fields: {
    id: {
      type: GraphQLString,
      resolve: images => images.id
    },
    meta: {
      type: GraphQLString,
      resolve: images => images.meta
    },
    urls: {
      type: new GraphQLList(GraphQLString),
      resolve: images => images.urls
    },
    description: {
      type: GraphQLString,
      resolve: images => images.description
    }
  }
});

const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product description ...',
  fields: {
    id: {
      type: GraphQLString,
      resolve: product => product.id
    },
    qty: {
      type: GraphQLFloat,
      resolve: product => product.qty
    },
    name: {
      type: GraphQLString,
      resolve: product => product.name
    },
    description: {
      type: GraphQLString,
      resolve: product => product.description
    },
    price: {
      type: GraphQLFloat,
      resolve: product => product.price
    },
    images: {
      type: ProductImagesType,
      resolve: product => productsImagesData.find(images => images.id === product.productImagesId)
    }
  }
});

const CartType = new GraphQLObjectType({
  name: 'Cart',
  description: 'Cart description...',
  fields: {
    total: {
      type: GraphQLFloat,
      resolve: cart => cart.products.reduce((acc, next) => {
        const { price } = productsData.find(el => el.id === next.id);
        return acc + (price * next.qty);
      }, 0)
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
        const products = [];
        cart.products.forEach((el) => {
          const prod = productsData.find(product => product.id === el.id);
          products.push(Object.assign({}, prod, { qty: el.qty }));
        });
        return products;
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

const product = {
  type: ProductType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (_, args) => {
    const item = productsData.find(prod => prod.id === args.id);
    return item && Object.assign(item, { qty: 1 });
  }
};

module.exports = {
  cart,
  product
};
