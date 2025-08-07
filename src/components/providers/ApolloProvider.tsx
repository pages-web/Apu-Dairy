"use client";

import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./getApollo";

export function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = getApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
