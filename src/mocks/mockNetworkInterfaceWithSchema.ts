import {
  NetworkInterface,
  Request,
} from 'apollo-client/transport/networkInterface';

import {
  GraphQLSchema,
  graphql,
  print,
} from 'graphql';

export function mockNetworkInterfaceWithSchema({ schema, root = {}, context = {}}:
  {schema: GraphQLSchema, root?: any, context?: any}): NetworkInterface {
  return {
    query(request: Request) {
    return graphql(schema, print(request.query), root, context, request.variables, request.operationName);
    },
  }
}
