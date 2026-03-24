import { Flex, Grid } from '@cetec/styled-system/jsx';

import { Text } from '~/components/Text';
import { textStyles } from '~/styles/utilities/textStyles';

interface TypographyTokenProps {
  tokenKey: string;
  sampleText?: string;
}

type TextStyleValue = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string | number;
};

const getTextStyleValue = (tokenKey: string): TextStyleValue | undefined => {
  const styles = textStyles as Record<string, unknown>;

  if (tokenKey.includes('.')) {
    const [family, variant] = tokenKey.split('.');

    if (family && variant) {
      const familyNode = styles[family] as Record<string, unknown> | undefined;
      const variantNode = familyNode?.[variant] as
        | Record<string, unknown>
        | undefined;
      return variantNode?.value as TextStyleValue | undefined;
    }

    return undefined;
  }

  const valueNode = styles[tokenKey] as Record<string, unknown> | undefined;
  return valueNode?.value as TextStyleValue | undefined;
};

export const TextStyleToken = ({
  tokenKey,
  sampleText = 'The quick brown fox jumps over the lazy dog',
}: TypographyTokenProps) => {
  const styleObj = getTextStyleValue(tokenKey);

  const fontFamily = styleObj?.fontFamily;
  const fontSizePx = styleObj?.fontSize ?? 0;
  const fontSizeRem = fontSizePx / 16;
  const fontWeight = styleObj?.fontWeight;

  return (
    <Flex gap="40" w="fit" maxW="full" align="baseline">
      <Text
        textStyle="mono.md"
        fontWeight="bold"
        color="text"
        lineHeight="none"
      >
        {tokenKey}
      </Text>

      <Flex
        direction="column"
        gap="12"
        p="2"
        bg="bg.neutral.subtle"
        rounded="2"
        maxW="full"
        overflow="hidden"
      >
        <Text
          p="2"
          bg="bg.neutral"
          rounded="2"
          w="fit"
          maxW="full"
          textStyle={tokenKey}
          truncate
        >
          {sampleText}
        </Text>
        <Grid
          gridTemplateColumns="auto"
          gridAutoFlow="column"
          gridTemplateRows="auto"
          columnGap="16"
          rowGap="0"
          w="fit"
        >
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">
            font: <b>{fontFamily}</b>
          </Text>
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">
            size: <b>{fontSizeRem}rem</b> ({fontSizePx}px)
          </Text>
          <Text textStyle="mono.xs" color="text.subtlest" whiteSpace="nowrap">
            weight: <b>{fontWeight}</b>
          </Text>
        </Grid>
      </Flex>
    </Flex>
  );
};
