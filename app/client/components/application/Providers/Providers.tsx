import { ApolloProvider, SuspenseCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';

import { apolloClient } from '../../../utils//apollo_client';

type Props = {
  children: React.ReactNode;
};

const suspenseCache = new SuspenseCache();

export const Providers: React.FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <RecoilRoot>{children}</RecoilRoot>
  </ApolloProvider>
);
