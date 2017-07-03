import { ApolloClient, createNetworkInterface } from 'apollo-client';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:8000/graphql' })

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
