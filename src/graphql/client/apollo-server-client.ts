import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";

// Http link
const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: "include",
});

// Auth link
const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("token") || "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLinkWithMiddleware = authLink.concat(httpLink);

// Retry link тохиргоо
const retryLink = new RetryLink({
  attempts: {
    max: 2, // retry оролдлогын тоо багасгах
    retryIf: (error) => !!error,
  },
  delay: {
    initial: 300, // retry-ийн анхны хүлээлт (ms)
    max: 1000,
    jitter: true,
  },
});

const client = new ApolloClient({
  link: retryLink.concat(httpLinkWithMiddleware),
  cache: new InMemoryCache(),
});
