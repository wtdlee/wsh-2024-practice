import { useQuery } from '@apollo/client';

import type { GetProductDetailsQueryResponse } from '../graphql/queries';
import { GetProductDetailsQuery } from '../graphql/queries';

export const useProduct = (productId: number) => {
  const productResult = useQuery<GetProductDetailsQueryResponse>(GetProductDetailsQuery, {
    variables: {
      productId,
    },
  });

  const product = productResult.data?.product;

  return { product };
};
