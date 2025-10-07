"use client";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { RetryLink } from "@apollo/client/link/retry";
import React from "react";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : "";
  const cookie = `pos-config-token=${process.env.NEXT_PUBLIC_POS_TOKEN}`;
  return {
    headers: {
      ...headers,
      cookie,
      "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const retryLink = new RetryLink({
  attempts: { max: 2, retryIf: (error) => !!error },
  delay: { initial: 300, max: 1000, jitter: true },
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `${process.env.NEXT_PUBLIC_WS_DOMAIN}`,
        })
      )
    : null;

const splitLink = wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      retryLink.concat(authLink.concat(httpLink))
    )
  : retryLink.concat(authLink.concat(httpLink));
const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: splitLink,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== "production",
});

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
