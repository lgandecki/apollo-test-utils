import {
  NetworkInterface,
  Request,
} from 'apollo-client/transport/networkInterface';

import {
  GraphQLSchema,
  graphql
} from 'graphql';

import {
  print,
} from 'graphql-tag/printer';

export function mockNetworkInterfaceWithSchema(options: {schema: GraphQLSchema}): NetworkInterface {
  return {
    query(request: Request) {
    return graphql(options.schema, print(request.query), {}, {}, request.variables, request.operationName);
    },
  }
}
