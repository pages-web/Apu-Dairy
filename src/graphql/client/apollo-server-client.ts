// graphql/client/apollo-server-client.tsx
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<any> | null = null;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
