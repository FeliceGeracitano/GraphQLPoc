const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

// Fields
const hello = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString }
  },
  resolve() {}
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
