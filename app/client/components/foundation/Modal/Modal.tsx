import type { FC, ReactNode } from 'react';

import * as styles from './Modal.styles';

type Props = {
  show: boolean;
  onHide: () => void;
  children: ReactNode;
};

export const Modal: FC<Props> = ({ children }) => (
  <div className={styles.inner()} data-testid="modal">
    {children}
  </div>
);
