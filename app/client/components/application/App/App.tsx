import type { FC } from 'react';

import { SignInModal } from '../../modal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal';
import { Providers } from '../Providers';

export const App: FC = () => (
  <Providers>
    <SignInModal />
    <SignUpModal />
  </Providers>
);
