import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  Observable,
  fromPromise,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
// import { environment } from '../environments/environment';
// import { RefreshToken, SignOut } from '../services/rest/Login';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

// let isRefreshing = false;
let pendingRequests: any[] = [];

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

// const errorLink = onError(
//   ({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       const authHookError = graphQLErrors.some(
//         (err) => err.extensions.code === 'access-denied'
//       );

//       if (authHookError) {
//         let forward$;

//         if (!isRefreshing) {
//           isRefreshing = true;

//           return new Observable((observer) => {
//             RefreshToken()
//               .then(() => {
//                 const subscriber = {
//                   next: observer.next.bind(observer),
//                   error: observer.error.bind(observer),
//                   complete: observer.complete.bind(observer),
//                 };

//                 resolvePendingRequests();

//                 forward(operation).subscribe(subscriber);
//               })
//               .catch((error) => {
//                 console.log('failed', error);
//                 pendingRequests = [];
//                 observer.error(error);
//                 SignOut().then(() => {
//                   // TODO: to use react redirect instead of window location
//                   window.location.href = '/login';
//                 });
//               })
//               .finally(() => {
//                 isRefreshing = false;
//               });
//           });
//         } else {
//           forward$ = fromPromise(
//             new Promise<void>((resolve) => {
//               pendingRequests.push(() => resolve());
//             })
//           );
//         }
//         return forward$.flatMap(() => forward(operation));
//       } else {
//         // TODO: add logging service
//         console.log(`graphql errors`, graphQLErrors);
//       }
//     }
//     if (networkError) {
//       // Hasura server is down
//       // TODO: show something went wrong error
//       console.log(`[Network error]: ${networkError}`);
//     }
//   }
// );

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
