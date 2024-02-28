import { useMutation } from '@apollo/client';

import type { UpdateItemInShoppingCartMutationResponse } from '../graphql/mutations';
import { UpdateItemInShoppingCartMutation } from '../graphql/mutations';

export const useUpdateCartItem = () => {
  const [updateCartItem] = useMutation<UpdateItemInShoppingCartMutationResponse>(UpdateItemInShoppingCartMutation, {
    onQueryUpdated(observableQuery) {
      return observableQuery.refetch();
    },
    refetchQueries: ['GetAuthUser'],
  });

  return { updateCartItem };
};
