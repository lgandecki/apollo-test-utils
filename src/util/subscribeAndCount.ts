import { ApolloQueryResult, ObservableQuery } from 'apollo-client';
import { Subscription } from 'apollo-client/util/Observable';

export function subscribeAndCount(done: MochaDone, observable: ObservableQuery<any>,
    cb: (handleCount: number, result: ApolloQueryResult<any>) => any): Subscription {
  let handleCount = 0;
  const subscription = observable.subscribe({
    next: result => {
      try {
        handleCount++;
        cb(handleCount, result);
      } catch (e) {
        subscription.unsubscribe();
        done(e);
      }
    },
    error: done,
  });
  return subscription;
};
