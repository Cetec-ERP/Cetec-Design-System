import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';

import { Box } from '~/components/Box';
import type { BoxProps } from '~/components/Box';
import { Text } from '~/components/Text';
import {
  containerSizeTokens,
  numericSizes,
  sizes,
  utilitySizes,
} from '~/styles/primitives/sizes';
import { breakpoints } from '~/styles/utilities/breakpoints';

export interface SizeTokenProps {
  tokenKey:
    | keyof (
        | typeof numericSizes
        | typeof utilitySizes
        | typeof containerSizeTokens
        | typeof breakpoints
      )
    | string;
  utility?: boolean;
  breakpoint?: boolean;
}

const getSizeTokenValue = (
  tokenKey: string,
  breakpoint?: boolean,
): string | undefined => {
  const numericSizeTokens = numericSizes as Record<string, { value: string }>;
  const utilitySizeTokens = utilitySizes as Record<string, { value: string }>;
  const containerSizes = containerSizeTokens as Record<
    string,
    { value: string }
  >;

  if (tokenKey in numericSizes) {
    return numericSizeTokens[tokenKey]?.value;
  }
  if (tokenKey in utilitySizes) {
    return utilitySizeTokens[tokenKey]?.value;
  }
  if (tokenKey in containerSizeTokens) {
    return containerSizes[tokenKey]?.value;
  }
  if (tokenKey in breakpoints && breakpoint) {
    return breakpoints[tokenKey as keyof typeof breakpoints];
  }
  const fallbackValue = sizes[tokenKey as keyof typeof sizes];

  if (typeof fallbackValue === 'string') {
    return fallbackValue;
  }

  if (
    fallbackValue &&
    typeof fallbackValue === 'object' &&
    'value' in fallbackValue &&
    typeof fallbackValue.value === 'string'
  ) {
    return fallbackValue.value;
  }

  return undefined;
};

export const wrapperStyles = css({
  w: 'fit',
  py: '2',
  px: '4',
  borderWidth: '1',
  borderColor: 'transparent',
  borderStyle: 'dashed',
  flexDirection: 'column',
  bg: 'transparent',
  gap: '4',
  rounded: '2',
  _utility: {
    borderColor: 'border',
    bg: 'bg.accent.neutral.subtlest',
  },
});

export const sizeBarStyles = css({
  height: '8',
  rounded: '2',
  bg: 'bg.accent.blue',
});

export const SizeToken = ({
  tokenKey,
  utility = false,
  breakpoint = false,
}: SizeTokenProps) => {
  let tokenValue: string | undefined;
  let breakpointTokenRems: string | undefined;

  // if breakpoint, create a token value for the breakpoint
  if (breakpoint) {
    tokenValue = `${tokenKey}`;
    tokenKey = `breakpoint-${tokenKey}`;
    breakpointTokenRems = breakpoints[tokenValue as keyof typeof breakpoints];
  }

  return (
    <Flex className={wrapperStyles} data-utility={utility}>
      <Flex gap="8" align="baseline">
        <Text
          textStyle="mono.md"
          fontWeight="bold"
          color="text"
          lineHeight="none"
        >
          {breakpoint ? tokenValue : tokenKey}
        </Text>
        <Box
          className={sizeBarStyles}
          width={tokenKey as BoxProps['width']}
          data-size-token-value={getSizeTokenValue(tokenKey)}
        />
      </Flex>
      <Text textStyle="mono.xs" color="text.subtlest" lineHeight="none">
        {breakpoint ? breakpointTokenRems : getSizeTokenValue(tokenKey)}
      </Text>
    </Flex>
  );
};
