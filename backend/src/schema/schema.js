import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import fields from './fields'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'RootQuery',
  fields
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
