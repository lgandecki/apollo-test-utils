import { MockedResponse } from './mockNetworkInterface';

import { mockQueryManager } from './mockQueryManager';

import { ObservableQuery } from 'apollo-client/core/ObservableQuery'; // tslint:disable-line

export const mockWatchQuery = (...mockedResponses: MockedResponse[]) => {
  const queryManager = mockQueryManager(...mockedResponses);
  const firstRequest = mockedResponses[0].request;
  return queryManager.watchQuery({
    query: firstRequest.query,
    variables: firstRequest.variables,
  });
};
