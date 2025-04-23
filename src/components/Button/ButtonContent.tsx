import { ReactNode } from 'react';
import { HStack } from '@styled-system/jsx';
import { Spinner } from '~/components/Spinner';
import { Box } from '../Box';

/**
 * ButtonContent handles rendering the children alongside an optional Spinner.
 */
export const ButtonContent = ({
  loading = false,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) => (
  <>
    <HStack gap="2" opacity={loading ? '0' : '1'}>
      {children}
    </HStack>
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      placeItems="center"
      display={loading ? 'grid' : 'none'}
    >
      <Spinner />
    </Box>
  </>
);
