import { ApolloQueryResult, ObservableQuery } from 'apollo-client';
import { Subscription } from 'apollo-client/util/Observable';

import { wrap } from './wrap';

export function subscribeAndCount(done: MochaDone, observable: ObservableQuery<any>,
    cb: (handleCount: number, result: ApolloQueryResult<any>) => any): Subscription {
  let handleCount = 0;
  return observable.subscribe({
    next: wrap(done, result => {
      handleCount++;
      cb(handleCount, result);
    }),
    error: done,
  });
};
