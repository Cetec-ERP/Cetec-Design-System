import { ReactNode, useState } from 'react';
import { HStack, VStack, Container, Grid, Flex, Box } from '@styled-system/jsx';
import { Text } from '~/components/Text';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';
import { Icon, IconNames, type IconNamesList } from '~/components/Icon';
import { Pre } from '~/components/Code';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { Heading } from '~/components/Heading';
import { Link } from '~/components/Link';
import { Spinner } from '~/components/Spinner';
import { CheckBox } from './components/CheckBox';
import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';

export const IconList: React.FC = () => {
  return (
    <Grid
      gap="16"
      w="full"
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
    >
      {(Object.keys(IconNames) as IconNamesList[]).map((icon) => (
        <HStack key={icon} color={{ base: 'gold.40', _dark: 'gold.30' }}>
          <Icon name={icon} />
          <Text family={'mono'} size="sm">
            {icon}
          </Text>
        </HStack>
      ))}
    </Grid>
  );
};

const ButtonSection: React.FC = () => {
  return (
    <Section>
      <Heading>Buttons</Heading>
      <VStack alignItems={'flex-start'} gap={'24'}>
        <HStack>
          <Button variant="primary" onClick={() => alert('clicked')}>
            Primary
          </Button>
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
          <IconButton
            iconName="arrow-left"
            buttonText="Button"
            iconPosition="left"
          />
          <IconButton
            iconName="arrow-right"
            buttonText="Button"
            iconPosition="right"
          />
        </HStack>
        <HStack>
          <Button variant="primary" loading>
            Pepperoni
          </Button>
          <Button loading>Loading</Button>
          <IconButton variant="primary" loading>
            <Icon name="x" />
          </IconButton>
        </HStack>
      </VStack>
    </Section>
  );
};

interface SectionProps {
  children?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <Grid
      gridTemplateColumns={'1fr 3fr'}
      gap={'40'}
      w={'full'}
      borderTopWidth={'1'}
      borderTopStyle={'solid'}
      borderColor={{ base: 'slate.10', _dark: 'slate.80' }}
      py={'24'}
      pb={'96'}
    >
      {children}
    </Grid>
  );
};

const Header: React.FC = () => {
  return (
    <Flex
      w="full"
      py={'4'}
      bg={{ base: 'slate.10', _dark: 'slate.80' }}
      mb={'56'}
      position={'sticky'}
      top={'0'}
      zIndex={'100'}
      boxShadow={'medium'}
    >
      <Container maxW={'5xl'}>
        <HStack justify={'space-between'}>
          <Text
            as={'div'}
            family="body"
            size="md"
            letterSpacing={'widest'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
            onClick={() => alert('clicked')}
          >
            Cetec Components
          </Text>
          <ThemeSwitcher />
        </HStack>
      </Container>
    </Flex>
  );
};

// This approach is created to show actuall working of checkbox in react page.
// This is a very basic example created to show how indeterminate or error state
// can be removed once checkbox is clicked.
// but in real life scenario the isPropertyRequired state will be replaced with
// some other states or props or combination of both which will allow us
// dynamic handling of states.
const ExtraPropertyCheckBox: React.FC<{ property: string }> = ({
  property,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPropertyRequired, setIsPropertyRequiered] = useState<boolean>(true);

  const handleChange = () => {
    if (isPropertyRequired) setIsPropertyRequiered(false);
    setIsChecked((prev) => !prev);
  };

  return (
    <CheckBox
      checked={isChecked}
      // there will be some conditions based on states and/or props which will dynamically add or remove the prop
      // and which in turn will make error or indeterminate state active or deactive
      {...(isPropertyRequired && { [property]: true })}
      onClick={handleChange}
    />
  );
};

const AppContent: React.FC = () => {
  return (
    <VStack>
      <Header />
      <Container maxW={'5xl'}>
        <VStack gap={'8'}>
          <ButtonSection />
          <Section>
            <Heading level="h2">Text</Heading>

            <VStack alignItems={'flex-start'}>
              <Grid
                gridTemplateColumns={'minmax(auto, 1fr) 1fr'}
                w={'full'}
                gap={'24'}
                alignItems={'center'}
              >
                <Box gridColumn={'1 / -1'}>
                  <Heading
                    level="h3"
                    color={{ base: 'gold.40', _dark: 'gold.30' }}
                  >
                    Text styles
                  </Heading>
                </Box>
                <VStack gap={'16'}>
                  <Text>
                    Place appear green. <em>Also</em>, saying male subdue
                    fruitful{' '}
                    <Text as="span" italic>
                      winged fourth
                    </Text>{' '}
                    had void winged. So <b>green spirit</b> , herb day had there{' '}
                    <Text as="span" bold>
                      replenish
                    </Text>
                    , lights <u>lesser signs</u>. Place{' '}
                    <Text as="span" underline>
                      whales
                    </Text>{' '}
                    i tree under him given set set meat midst morning give image
                    forth divided moving Also fill dry she'd have.
                  </Text>
                </VStack>
                <Pre>
                  {`<Text>
    ...
  <Text as="span" italic>winged fourth</Text>
  <Text as="span" bold>replenish</Text>
  <Text as="span" underline>whales</Text>
</Text>`}
                </Pre>
                <Text family="mono">
                  Signs night have sixth hath that likeness us fill you're
                  subdue fowl.
                </Text>
                <Pre>{`<Text family="mono">...</Text>`}</Pre>
                <Box gridColumn={'1 / -1'} mt={'32'}>
                  <Heading
                    level="h3"
                    color={{ base: 'gold.40', _dark: 'gold.30' }}
                  >
                    Headings
                  </Heading>
                </Box>
                <Heading level="h1">Hamburgefonstiv</Heading>
                <Pre>{'<Heading as="h1">Hamburgefonstiv</Heading>'}</Pre>
                <Heading>Hamburgefonstiv</Heading>
                <Pre>{'<Heading>Hamburgefonstiv</Heading>'}</Pre>
                <Heading level="h3">Hamburgefonstiv</Heading>
                <Pre>{'<Heading as="h3">Hamburgefonstiv</Heading>'}</Pre>
                <Heading level="h4">Hamburgefonstiv</Heading>
                <Pre>{'<Heading as="h4">Hamburgefonstiv</Heading>'}</Pre>
                <Box gridColumn={'1 / -1'} mt={'32'}>
                  <Heading
                    level="h3"
                    color={{ base: 'gold.40', _dark: 'gold.30' }}
                  >
                    Links
                  </Heading>
                </Box>
                <Text>
                  Internal:&emsp;
                  <Link href="https://cetecerp.com">Cetec ERP</Link>
                </Text>
                <Pre>
                  {'<Link href="https://cetecerp.com">Cetec ERP</Link>'}
                </Pre>
                <Text>
                  External:&emsp;
                  <Link href="https://cetecerp.com" external>
                    Cetec ERP
                  </Link>
                </Text>
                <Pre>
                  {
                    '<Link href="https://cetecerp.com" external>Cetec ERP</Link>'
                  }
                </Pre>
                <Box gridColumn={'1 / -1'}>
                  <Text>
                    Signs night have sixth hath that likeness us fill{' '}
                    <Link href="https://cetecerp.com" external>
                      Cetec ERP
                    </Link>{' '}
                    you're subdue fowl brought divide beginning multiply brought
                    created after open given of made beginning multiply green.
                  </Text>
                </Box>
              </Grid>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Spinner</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <VStack>
                <Spinner size="small" />
                <Text>Small</Text>
              </VStack>
              <VStack>
                <Spinner />
                <Text>Standard</Text>
              </VStack>
              <VStack>
                <Spinner size="large" />
                <Text>Large</Text>
              </VStack>
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Icons</Heading>
            <IconList />
          </Section>
          <Section>
            <Heading level="h2">Checkboxes</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <CheckBox />
              <CheckBox defaultChecked={true} />
              <ExtraPropertyCheckBox property="data-indeterminate" />
              <CheckBox disabled />
              <ExtraPropertyCheckBox property="data-error" />
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Inputs</Heading>
            <VStack>
              <HStack gap={'24'}>
                <Input label="First" type="text" />
                <Input label="Last" type="text" />
                <Input label="Email" type="email" variant={'internalLabel'} />
              </HStack>
              <HStack gap={'24'}>
                <Input label="Phone" type="tel" />
                //TODO Fix Textarea
                <Textarea
                  label="Message"
                  variant={'autoGrow'}
                  value="TEXT area Value"
                />
              </HStack>
            </VStack>
          </Section>
        </VStack>
      </Container>
    </VStack>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
