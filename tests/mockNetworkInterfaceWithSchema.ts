import { mockNetworkInterfaceWithSchema } from '../src';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { expect } from 'chai';
import gql from 'graphql-tag';


describe('mockNetworkInterfaceWithSchema', () => {
  it('can respond to a simple query', () => {
    const typeDefs = `
      type User {
        id: Int
        name: String
      }

      type Query {
        user: User
      }
    `;

    const schema = makeExecutableSchema({ typeDefs });
    addMockFunctionsToSchema({ schema });

    const NI = mockNetworkInterfaceWithSchema({ schema });
    return NI.query({ query: gql`{ user { name }}`}).then( res => {
      return expect(res).to.deep.equals({
        data: {
          user: {
            name: 'Hello World',
          },
        },
      });
    });
  });
});
