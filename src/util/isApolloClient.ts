import { ApolloClient } from 'apollo-client';

export function isApolloClient(client: any): boolean {
  return client instanceof ApolloClient;
}
