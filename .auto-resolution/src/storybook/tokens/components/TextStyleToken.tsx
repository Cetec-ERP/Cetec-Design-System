import React from 'react';
import { Text } from '~/components/Text';
import { Flex, Grid } from '@styled-system/jsx';
import { textStyles } from '~/styles/utilities/textStyles';

interface TypographyTokenProps {
  tokenKey: string;
  sampleText?: string;
}

export const TextStyleToken: React.FC<TypographyTokenProps> = ({
  tokenKey,
  sampleText = 'The quick brown fox jumps over the lazy dog',
}) => {
  // Handle possible variant keys (`tokenKey` may be like "body.md", "display.lg", etc.)
  let styleObj: any = undefined;
  if (tokenKey.includes('.')) {
    const parts = tokenKey.split('.');
    const family = parts[0];
    const variant = parts[1];
    if (family && variant) {
      styleObj = (textStyles as any)?.[family]?.[variant]?.value;
    }
  } else {
    // fallback, but our tokens should always be in the format family.variant
    styleObj = (textStyles as any)?.[tokenKey]?.value;
  }

  const fontFamily = styleObj?.fontFamily;
  const fontSizePx = styleObj?.fontSize;
  const fontSizeRem = fontSizePx / 16;
  const fontWeight = styleObj?.fontWeight;

  return (
    <Flex gap="40" w="fit" maxW="full" align="baseline">
      <Text textStyle="mono.md" fontWeight="bold" color="text" lineHeight="none">
        {tokenKey}
      </Text>

      <Flex direction="column" gap="12" p="2" bg="bg.neutral.subtle" rounded="2" maxW="full" overflow="hidden">
        <Text p="2" bg="bg.neutral" rounded="2" w="fit" maxW="full" textStyle={tokenKey} truncate>{sampleText}</Text>
        <Grid gridTemplateColumns="auto" gridAutoFlow="column" gridTemplateRows="auto" columnGap="16" rowGap="0" w="fit">
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">font: <b>{fontFamily}</b></Text>
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">size: <b>{fontSizeRem}rem</b> ({fontSizePx}px)</Text>
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">weight: <b>{fontWeight}</b></Text>
        </Grid>
      </Flex>
    </Flex>
  );
};
