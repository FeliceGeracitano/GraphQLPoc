import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

// Fields
const hello = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString }
  },
  resolve(root, params, info) {
    debugger;
  }
};

const getFields = () => ({ hello });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Return name',
  fields: getFields()
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
