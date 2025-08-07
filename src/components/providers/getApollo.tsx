import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function getApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_MAIN_API_DOMAIN + "/graphql",
    }),
    cache: new InMemoryCache(),
  });
}
