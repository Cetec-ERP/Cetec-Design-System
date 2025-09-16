import { ReactNode } from 'react';
import { HStack, VStack, Container, Grid, Flex } from '@styled-system/jsx';
import { Box } from '~/components/Box';
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
import { type ShadowToken } from '@styled-system/tokens';
import { Radio } from './components/Radio';
import { Toggle } from './components/Toggle';
import { Divider } from './components/Divider';
import { TextInput } from './components/TextInput';
import { Textarea } from '~/components/Textarea';
import { RadioInput } from './components/RadioInput';
import { CheckBoxInput } from './components/CheckboxInput';
import { ToggleInput } from './components/ToggleInput';
import { Card } from './components/Card';
import { css } from '@styled-system/css';
import { Tooltip } from './components/Tooltip';
import { Breadcurmbs } from './components/Breadcrumbs';


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
          <Text textStyle="mono-sm">{icon}</Text>
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
          <Button size="large">
            <Icon name="arrow-left" /> Button
          </Button>
          <Button size="small">
            Button <Icon name="arrow-right" />
          </Button>
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
            size="16"
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

const ShadowBox = ({
  children,
  shadow,
  border = false,
}: {
  children: ReactNode;
  shadow: ShadowToken;
  border?: boolean;
}) => {
  return (
    <Grid
      placeContent={'center'}
      width={'full'}
      aspectRatio={'landscape'}
      borderRadius={'4'}
      shadow={shadow}
      borderWidth={border ? '1' : undefined}
      borderStyle={'solid'}
      borderColor={{ base: 'slate.10', _dark: 'slate.90' }}
      bg={{ base: 'slate.0', _dark: 'slate.80' }}
    >
      {children}
    </Grid>
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
            <Heading level="h2">Shadows</Heading>
            <VStack gap={'40'} alignItems={'flex-end'}>
              <HStack width={'full'} gap={'40'} alignItems={'flex-end'}>
                <ShadowBox shadow={'inset'}>
                  <Text>Inset</Text>
                </ShadowBox>
                <ShadowBox shadow={'low'}>
                  <Text>Low</Text>
                </ShadowBox>
                <ShadowBox shadow={'medium'}>
                  <Text>Medium</Text>
                </ShadowBox>
                <ShadowBox shadow={'high'}>
                  <Text>High</Text>
                </ShadowBox>
              </HStack>
              <HStack width={'full'} gap={'40'} alignItems={'flex-end'}>
                <ShadowBox shadow={'inset'} border={true}>
                  <Text>Inset</Text>
                </ShadowBox>
                <ShadowBox shadow={'low'} border={true}>
                  <Text>Low</Text>
                </ShadowBox>
                <ShadowBox shadow={'medium'} border={true}>
                  <Text>Medium</Text>
                </ShadowBox>
                <ShadowBox shadow={'high'} border={true}>
                  <Text>High</Text>
                </ShadowBox>
              </HStack>
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
            <Heading level="h2">Divider</Heading>
            <VStack>
              <Heading level="h3" color={{ base: 'gold.40', _dark: 'gold.30' }}>
                Horizontal (default)
              </Heading>
              <VStack width="full">
                <Divider />
                <Text> Thin (default) </Text>
                <Divider weight={'medium'} />
                <Text> Medium </Text>
                <Divider weight={'thick'} />
                <Text> Thick </Text>
                <Divider
                  weight={'thicker'}
                  color={{ base: 'gold.40', _dark: 'gold.30' }}
                />
                <Text> Thicker </Text>
              </VStack>
              <Heading level="h3" color={{ base: 'gold.40', _dark: 'gold.30' }}>
                Vertical
              </Heading>
              <HStack height="96">
                <Divider direction={'vertical'} />
                <Divider direction={'vertical'} weight={'medium'} />
                <Divider direction={'vertical'} weight={'thick'} />
                <Divider
                  direction={'vertical'}
                  weight={'thicker'}
                  color={{ base: 'gold.40', _dark: 'gold.30' }}
                />
              </HStack>
            </VStack>
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
              <CheckBox indeterminate />
              <CheckBox error />
              <CheckBox disabled />
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Checkbox Input</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <CheckBoxInput>
                <Text>Consequat ipsum ipsum adipisicing deserunt.</Text>
              </CheckBoxInput>
              <CheckBoxInput defaultChecked={true}>
                <Text>Consequat ipsum ipsum adipisicing deserunt.</Text>
              </CheckBoxInput>
              <CheckBoxInput indeterminate>
                <Text>Consequat ipsum ipsum adipisicing deserunt.</Text>
              </CheckBoxInput>
              <CheckBoxInput error>
                <Text>Consequat ipsum ipsum adipisicing deserunt.</Text>
              </CheckBoxInput>
              <CheckBoxInput disabled>
                <Text>Consequat ipsum ipsum adipisicing deserunt.</Text>
              </CheckBoxInput>
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Radio</Heading>
            <VStack gap={'40'} alignItems={'start'}>
              <HStack>
                <Radio />
                <Radio defaultChecked={true} />
                <Radio disabled />
                <Radio error={true} />
              </HStack>
              <HStack>
                <HStack gap={'10'} alignItems={'center'}>
                  <Heading level="h4">Gender</Heading>
                  <Radio name="gender"></Radio> Male
                  <Radio name="gender"></Radio> Female
                </HStack>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Radio Input</Heading>
            <VStack gap={'40'} alignItems={'start'}>
              <HStack>
                <RadioInput name="group">
                  <Text as="div" size="16" weight={'normal'}>
                    Consequat ipsum ipsum adipisicing deserunt.
                  </Text>
                  <Text size="14">Deserunt proident officia nostrud.</Text>
                </RadioInput>
              </HStack>
              <HStack>
                <RadioInput name="group">
                  <Text as="div" size="16" weight={'normal'}>
                    Consequat ipsum ipsum adipisicing deserunt.
                  </Text>
                  <Text size="14">Deserunt proident officia nostrud.</Text>
                </RadioInput>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Toggle</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <Toggle />
              <Toggle autoFocus={true} />
              <Toggle disabled />
              <Toggle error={true} />
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Toggle Input</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <ToggleInput>
                <Text as="div" size="16" weight={'normal'}>
                  Consequat ipsum ipsum adipisicing deserunt.
                </Text>
                <Text size="14">Deserunt proident officia nostrud.</Text>
              </ToggleInput>
              <ToggleInput>
                <Text as="div" size="16" weight={'normal'}>
                  Consequat ipsum ipsum adipisicing deserunt.
                </Text>
                <Text size="14">Deserunt proident officia nostrud.</Text>
              </ToggleInput>
              <ToggleInput>
                <Text as="div" size="16" weight={'normal'}>
                  Consequat ipsum ipsum adipisicing deserunt.
                </Text>
                <Text size="14">Deserunt proident officia nostrud.</Text>
              </ToggleInput>
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Text Input</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput size={'small'} placeholder={'Enter Text'} />
                  <Text>Small</Text>
                </VStack>
                <VStack>
                  <TextInput placeholder={'Enter Text'} />
                  <Text>Medium</Text>
                </VStack>
                <VStack>
                  <TextInput size={'large'} placeholder={'Enter Text'} />
                  <Text>Large</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput defaultValue="entered text" />
                  <Text>Default - Filled</Text>
                </VStack>
                <VStack>
                  <TextInput data-error={true} placeholder={'placeholder'} />
                  <Text>Error</Text>
                </VStack>
                <VStack>
                  <TextInput disabled placeholder={'placeholder'} />
                  <Text>Disabled</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput autoSize={true} placeholder={'Enter Text'} />
                  <Text>Auto Size</Text>
                </VStack>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Textarea</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea placeholder="Small" size="small" />
                <Textarea placeholder="Medium" />
                <Textarea placeholder="Large" size="large" />
              </HStack>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea
                  placeholder="placeholder"
                  defaultValue="Default – Filled"
                />
                <Textarea placeholder="Disabled" disabled />
                <Textarea placeholder="Error" data-error={true} />
              </HStack>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea placeholder="Auto Size" autoSize={true} />
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Card</Heading>
            <VStack gap={'10'} alignItems={'flex-start'}>
              <Heading level="h4">Default</Heading>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Card grabbed={false}>
                  <Box className={css({ p: '16' })}>Default</Box>
                </Card>
                <Card grabbed>
                  <Box className={css({ p: '16' })}>Grabbed</Box>
                </Card>
                <Card disabled>
                  <Box className={css({ p: '16' })}>Disabled</Box>
                </Card>
              </HStack>
            </VStack>
            <Heading level="h2"></Heading>
            <VStack gap={'10'} alignItems={'flex-start'}>
              <Heading level="h4">Flat</Heading>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Card variant="flat">
                  <Box className={css({ p: '16' })}>Default</Box>
                </Card>
                <Card variant="flat" grabbed>
                  <Box className={css({ p: '16' })}>Grabbed</Box>
                </Card>
                <Card variant="flat" disabled>
                  <Box className={css({ p: '16' })}>Disabled</Box>
                </Card>
              </HStack>
            </VStack>
            <Heading level="h2"></Heading>
            <VStack gap={'10'} alignItems={'flex-start'}>
              <Heading level="h4">Example</Heading>
              <HStack gap={'40'} alignItems={'flex-start'}>
              <Card grabbed>
                  <Box className={css({ p: '16', textAlign: 'left' })}>
                    <Heading level="h4">Affordable Default</Heading>
                    <Text>
                      Forward thinking pricing model. Cetec ERP has broken
                      ground with the way business platforms are delivered,
                      making manufacturing ERP a platform and a commodity.
                    </Text>
                  </Box>
                </Card>
                <Card variant="flat">
                  <Box className={css({ p: '16', textAlign: 'left' })}>
                    <Heading level="h4">Affordable Flat</Heading>
                    <Text>
                      Forward thinking pricing model. Cetec ERP has broken
                      ground with the way business platforms are delivered,
                      making manufacturing ERP a platform and a commodity.
                    </Text>
                  </Box>
                </Card>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Tooltip</Heading>
            <VStack
              gap={'40'}
              alignContent={'flex-start'}
              justifyContent={'flex-start'}
            >
              <Heading level="h4">With Caret</Heading>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip title="Enter" text="You define me" trigger="onClick">
                  Bottom
                </Tooltip>
                <Tooltip
                  title="Title"
                  text="Details Content"
                  position={'top'}
                  trigger="onHover"
                  caret={false}
                >
                  Top
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left'}
                  trigger="onClick"
                >
                  Left
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'right'}
                  trigger="onClick"
                >
                  Right
                </Tooltip>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'bottom-start'}
                  trigger="onClick"
                >
                  Bottom Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'top-start'}
                  trigger="onClick"
                >
                  Top Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left-start'}
                  trigger="onClick"
                >
                  Left Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'right-start'}
                  trigger="onClick"
                >
                  Right Start
                </Tooltip>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'bottom-end'}
                  trigger="onClick"
                >
                  Bottom End
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'top-end'}
                  trigger="onClick"
                >
                  Top End
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left-end'}
                  trigger="onClick"
                >
                  Left End
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'right-end'}
                  trigger="onClick"
                >
                  Right End
                </Tooltip>
              </HStack>
            </VStack>
            <Heading level="h2"></Heading>
            <VStack
              gap={'40'}
              alignContent={'flex-start'}
              justifyContent={'flex-start'}
            >
              <Heading level="h4">Without Caret</Heading>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip
                  title="Enter"
                  text="You define me"
                  trigger="onClick"
                  caret={false}
                >
                  Bottom
                </Tooltip>
                <Tooltip
                  title="Title"
                  text="Details Content"
                  position={'top'}
                  trigger="onClick"
                  caret={false}
                >
                  Top
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left'}
                  trigger="onClick"
                  caret={false}
                >
                  Left
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'right'}
                  trigger="onClick"
                  caret={false}
                >
                  Right
                </Tooltip>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'bottom-start'}
                  trigger="onHover"
                  caret={false}
                >
                  Bottom Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'top-start'}
                  trigger="onClick"
                  caret={false}
                >
                  Top Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left-start'}
                  trigger="onClick"
                  caret={false}
                >
                  Left Start
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'right-start'}
                  trigger="onClick"
                  caret={false}
                >
                  Right Start
                </Tooltip>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'bottom-end'}
                  caret={false}
                >
                  Bottom End
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'top-end'}
                  caret={false}
                >
                  Top End
                </Tooltip>
                <Tooltip
                  title="Enter"
                  text="You define me"
                  position={'left-end'}
                  caret={false}
                >
                  Left End
                </Tooltip>
                <Tooltip
                  text="Right End Tooltip"
                  position={'right-end'}
                  trigger="onClick"
                  caret={false}
                >
                  Right End
                </Tooltip>
              </HStack>
            </VStack>
            <Heading gap={'40'}></Heading>
            <VStack
              gap={'40'}
              alignContent={'flex-start'}
              justifyContent={'flex-start'}
            >
              <Heading level="h4">Different Example</Heading>
              <HStack
                gap={'40'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Tooltip title="Enter" text="You define me">
                  <Icon name="info" />
                </Tooltip>
                <Tooltip title="Title" text="Details Content">
                  <IconButton variant="primary" size="large">
                    <Icon name="aa-placeholder" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Title" text="Details Content" caret={false}>
                  <IconButton variant="primary" size="large">
                    <Icon name="aa-placeholder" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Title" text="Details Content">
                  <Text as='u'>Text</Text>
                </Tooltip>
              </HStack>
            </VStack>
          </Section>
          <Section>
          <Heading level="h2">Breadcrumbs</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack>
                <Breadcurmbs items={[{label: 'Home', href:'/'}, {label: 'Integrations', href:'/'}, {label: 'ShipEngine'}]}/>
              </HStack>
            </VStack>
          </Section>
          {/* <Section>
            <Text as="h2">Inputs</Text>
            <Heading level="h2">Text Input</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput size={'small'} placeHolder={'Enter Text'} />
                  <Text>Small</Text>
                </VStack>
                <VStack>
                  <TextInput placeHolder={'Enter Text'} />
                  <Text>Medium</Text>
                </VStack>
                <VStack>
                  <TextInput size={'large'} placeHolder={'Enter Text'} />
                  <Text>Large</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput defaultValue="entered text" />
                  <Text>Default - Filled</Text>
                </VStack>
                <VStack>
                  <TextInput data-error={true} placeHolder={'placeholder'} />
                  <Text>Error</Text>
                </VStack>
                <VStack>
                  <TextInput disabled placeHolder={'placeholder'} />
                  <Text>Disabled</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput autoSize={true} placeHolder={'Enter Text'} />
                  <Text>Auto Size</Text>
                </VStack>
              </HStack>
            </VStack>
          </Section>
          */}
          
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
