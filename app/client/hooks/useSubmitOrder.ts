import { useMutation } from '@apollo/client';

import type { OrderItemsInShoppingCartMutationResponse } from '../graphql/mutations';
import { OrderItemsInShoppingCartMutation } from '../graphql/mutations';

export const useSubmitOrder = () => {
  const [submitOrder] = useMutation<OrderItemsInShoppingCartMutationResponse>(OrderItemsInShoppingCartMutation, {
    onQueryUpdated(observableQuery) {
      return observableQuery.refetch();
    },
    refetchQueries: ['GetAuthUser'],
  });

  return { submitOrder };
};
