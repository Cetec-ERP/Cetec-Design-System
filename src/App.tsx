import { ReactNode } from 'react';
import { css } from '@styled-system/css';
import { HStack, VStack, Container, Grid, Flex, Box } from '@styled-system/jsx';
import { Text } from '~/components/Text';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';
import { Icon, IconNames, type IconNamesList } from '~/components/Icon';
import { Pre } from '~/components/Code';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
// import { Input } from '~/components/Input';
// import { Textarea } from '~/components/Textarea';

function IconList() {
  return (
    <Grid
      gap="16"
      w="full"
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
    >
      {(Object.keys(IconNames) as IconNamesList[]).map((icon) => (
        <HStack key={icon} color={'gold.30'}>
          <Icon
            name={icon}
          />
          <Text>{icon}</Text>
        </HStack>
      ))}
    </Grid>
  );
}

const Section = ({ children }: { children?: ReactNode }) => {
  return (
    // This is a Flex component
    <Grid
      gridTemplateColumns={'10rem 1fr'}
      gap={'40'}
      w={'full'}
      borderTop={'1px solid pink'}
      borderColor={{ base: 'slate.10', _dark: 'slate.80' }}
      py={'24'}
      pb={'96'}
    >
      {children}
    </Grid>
  );
};

function AppContent() {
  return (
    <VStack>
      <Flex
        w="full"
        py={'24'}
        bg={{ base: 'slate.10', _dark: 'slate.80', _win95: 'tan.50' }}
        mb={'56'}
      >
        <Container maxW={'5xl'}>
          <HStack justify={'space-between'}>
            <Text as="h1">Cetec Components</Text>
            <ThemeSwitcher />
          </HStack>
        </Container>
      </Flex>
      <Container maxW={'5xl'}>
        <VStack gap={'8'}>
          <Section>
            <Text as="h2">Buttons</Text>
            <VStack alignItems={'flex-start'} gap={'24'}>
              <HStack>
                <Button variant="primary">Primary</Button>
                <Button>Standard</Button>
                <Button variant="hollow">Hollow</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="cta">CTA</Button>
                <Button variant="danger">Danger</Button>
              </HStack>
              <HStack>
                <IconButton variant="ghost">
                  <Icon name="x" />
                </IconButton>
                <IconButton>
                  <Icon name="arrow-left" />
                </IconButton>
                <IconButton variant="primary" size="large">
                  <Icon name="arrow-right" />
                </IconButton>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Text as="h2">Text</Text>
            <VStack alignItems={'flex-start'}>
              <Grid
                gridTemplateColumns={'minmax(auto, 1fr) 1fr'}
                w={'full'}
                gap={'24'}
                alignItems={'center'}
              >
                <Box gridColumn={'1 / -1'}>
                  <Text as="h4" color={'gold.40'}>
                    Text styles
                  </Text>
                </Box>
                <VStack gap={'16'}>
                  <Text>
                    Place appear green. Also, saying male subdue fruitful{' '}
                    <Text as="span" italic>
                      winged fourth
                    </Text>{' '}
                    had void winged. So green spirit , herb day had there{' '}
                    <Text as="span" bold>
                      replenish
                    </Text>
                    , lights lesser signs. Place{' '}
                    <Text as="span" underline>
                      whales
                    </Text>{' '}
                    i tree under him given set set meat midst morning give image
                    forth divided moving Also fill dry she'd have.
                  </Text>
                </VStack>
                <Pre>{`<Text>
	...
	<Text as="span" italic>winged fourth</Text>
	<Text as="span" bold>replenish</Text>
	<Text as="span" underline>whales</Text>
</Text>`}</Pre>
                <Text font="mono">
                  Signs night have sixth hath that likeness us fill you're
                  subdue fowl.
                </Text>
                <Pre>{`<Text font="mono">...</Text>`}</Pre>
                <Box gridColumn={'1 / -1'} mt={'32'}>
                  <Text as="h4" color={'gold.40'}>
                    Headings
                  </Text>
                </Box>
                <Text as="h1">Hamburgefonstiv</Text>
                <Pre>{'<Text as="h1">Hamburgefonstiv</Text>'}</Pre>
                <Text as="h2">Hamburgefonstiv</Text>
                <Pre>{'<Text as="h2">Hamburgefonstiv</Text>'}</Pre>
                <Text as="h3">Hamburgefonstiv</Text>
                <Pre>{'<Text as="h3">Hamburgefonstiv</Text>'}</Pre>
                <Text as="h4">Hamburgefonstiv</Text>
                <Pre>{'<Text as="h4">Hamburgefonstiv</Text>'}</Pre>
              </Grid>
            </VStack>
          </Section>
          <Section>
            <Text as="h2">Icons</Text>
            <IconList />
          </Section>
          {/* <Section>
            <Text as="h2">
              Inputs
            </Text>
            <VStack>
              <HStack gap={'24'}>
                <Input label="First" type="text" />
                <Input label="Last" type="text" />
                <Input label="Email" type="email" internalLabel={true} />
              </HStack>
              <HStack gap={'24'}>
                <Input label="Phone" type="tel" stacked={false} />
                <Textarea label="Message" autoGrow={true} />
              </HStack>
            </VStack>
          </Section> */}
        </VStack>
      </Container>
    </VStack>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
