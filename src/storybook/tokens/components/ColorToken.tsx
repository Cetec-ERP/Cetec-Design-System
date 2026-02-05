import type { ColorToken as ColorTokenType } from '@styled-system/tokens';
import { Box } from '~/components/Box';
import { Text } from '~/components/Text';
import { Flex } from '@styled-system/jsx';

export type ColorTokenProps = {
  tokenKey: ColorTokenType;
};

export const ColorToken = ({ tokenKey }: ColorTokenProps) => {
  return (
    <Flex direction="column" align="center" gap="2">
      <Box width="32" height="32" border="default" rounded="4" bg={tokenKey} />
      <Text textStyle="mono.xs">{tokenKey.replace(/^.*?\./, '')}</Text>
    </Flex>
  );
};
