'use client'

import client from "@/libs/apolloClient";
import { ApolloProvider } from "@apollo/client/react"

interface Props {
  children: React.ReactNode
}

export function ClientApolloProvider({ children }: Props) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}