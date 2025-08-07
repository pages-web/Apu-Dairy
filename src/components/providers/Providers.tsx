"use client";

import { ApolloProviderWrapper } from "./ApolloProvider";
import ThemeProvider from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProviderWrapper>
      <ThemeProvider>{children}</ThemeProvider>
    </ApolloProviderWrapper>
  );
}
