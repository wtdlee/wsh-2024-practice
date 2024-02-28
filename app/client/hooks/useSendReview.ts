import { useMutation } from '@apollo/client';

import type { SendReviewMutationResponse } from '../graphql/mutations';
import { SendReviewMutation } from '../graphql/mutations';

export const useSendReview = () => {
  const [sendReview] = useMutation<SendReviewMutationResponse>(SendReviewMutation, {
    onQueryUpdated(observableQuery) {
      return observableQuery.refetch();
    },
    refetchQueries: ['GetProductDetails'],
  });

  return { sendReview };
};
