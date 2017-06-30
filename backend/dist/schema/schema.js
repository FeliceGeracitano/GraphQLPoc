'use strict';

var _graphql = require('graphql');

// Fields
var hello = {
  type: _graphql.GraphQLString,
  args: {
    name: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(root, params, info) {
    debugger;
  }
};

var getFields = function getFields() {
  return { hello: hello };
};

var RootQuery = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Return name',
  fields: getFields()
});

module.exports = new _graphql.GraphQLSchema({
  query: RootQuery
});
//# sourceMappingURL=schema.js.map