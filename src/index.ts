export * from './util/isApolloClient';
export * from './mocks/mockNetworkInterface';
export * from './mocks/mockNetworkInterfaceWithSchema';
// We export the graphql-tools used by test-utils to avoid the
// "Also ensure that there are not multiple versions of GraphQL installed in your node_modules directory." error.
// In particular, makeExecutableSchema should be used from this export instead of graphql-tools used directly by your project
export * from 'graphql-tools';

