import { Flex } from '@cetec/styled-system/jsx';

import { Box } from '~/components/Box';
import type { BoxProps } from '~/components/Box';
import { Text } from '~/components/Text';
import { radii } from '~/styles/primitives/radii';

interface RadiusTokenProps {
  tokenKey: keyof typeof radii;
  boxWidth?: BoxProps['width'];
}

export const RadiusToken = ({
  tokenKey,
  boxWidth = '32',
}: RadiusTokenProps) => {
  // remove "{" and "}" from the token value
  const tokenValue = radii[tokenKey as keyof typeof radii].value
    .replace('{', '')
    .replace('}', '');

  return (
    <Flex direction="column" gap="12" w="fit" align="center">
      <Text
        textStyle="mono.md"
        fontWeight="bold"
        color="text"
        lineHeight="none"
      >
        {tokenKey}
      </Text>
      <Box
        width={boxWidth}
        height="32"
        backgroundColor="blue.50"
        borderWidth="1"
        borderColor="blue.60"
        borderRadius={tokenKey}
      />
      <Text textStyle="mono.xs" color="text.subtlest" lineHeight="none">
        {tokenValue}
      </Text>
    </Flex>
  );
};
