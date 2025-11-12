import { ReactNode, useState } from 'react';
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
import { Checkbox } from './components/Checkbox';
import { type ShadowToken } from '@styled-system/tokens';
import { Radio } from './components/Radio';
import { Toggle } from './components/Toggle';
import { Divider } from './components/Divider';
import { TextInput } from './components/TextInput';
import { Textarea } from '~/components/Textarea';
import { RadioInput } from './components/RadioInput';
import { CheckboxInput } from './components/CheckboxInput';
import { ToggleInput } from './components/ToggleInput';
import { Card } from './components/Card';
import { css } from '@styled-system/css';
import { Tooltip } from './components/Tooltip';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Tag } from './components/Tag';
import { Menu } from './components/Menu';

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

const menuData = [
  {
    id: '1',
    items: [
      { id: '1', label: 'Profile' },
      { id: '2', label: 'Settings' },
      { id: '3', label: 'Logout' },
    ],
  },
];

const menuWithIcon = [
  {
    id: '1',
    items: [
      { id: '1', label: 'Menu item label', iconName: 'aa-placeholder' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
  },
];

const multiLevelCheckboxSection = [
  {
    id: '1',
    items: [
      { id: '1', label: 'Menu item label' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
  },
];

const multiLevelToggleSection = [
  {
    id: '1',
    items: [
      { id: '1', label: 'Menu item label' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
  },
];

const menuWithDescription = [
  {
    id: '2',
    items: [
      {
        id: '1',
        label: 'Menu item label',
        description: 'Description text goes here',
      },
      {
        id: '2',
        label: 'Menu item label',
        description: 'Description text goes here',
      },
      {
        id: '3',
        label: 'Menu item label',
        description: 'Description text goes here',
      },
      {
        id: '4',
        label: 'Menu item label',
        description: 'Description text goes here',
        disabled: true,
      },
    ],
  },
];

const menuWithChildren = [
  {
    id: '4',
    items: [
      {
        id: '1',
        label: 'Print',
        children: [
          {
            id: '4-1',
            items: [
              { id: '1-1', label: 'License plate' },
              { id: '1-2', label: 'Part Pick List' },
              { id: '1-3', label: 'BOM Tree' },
              { id: '1-4', label: 'Serial List, Top & Component' },
            ],
          },
        ],
      },
      {
        id: '2',
        label: 'Add note',
        children: [
          {
            id: '4-1',
            items: [
              { id: '1-1', label: 'License plate' },
              { id: '1-2', label: 'Part Pick List' },
              { id: '1-3', label: 'BOM Tree' },
              { id: '1-4', label: 'Serial List, Top & Component' },
            ],
          },
        ],
      },
    ],
  },
];

const menuSectionTitleAndDivider = [
  {
    id: '1',
    title: 'Section Title',
    items: [
      { id: '1', label: 'Menu item label' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
    divider: true,
  },
  {
    id: '2',
    title: 'Section Title Two',
    items: [
      { id: '5', label: 'Menu item label' },
      { id: '6', label: 'Menu item label' },
    ],
  },
];

const menuWithSpacer = [
  {
    id: '1',
    title: 'Section Title',
    items: [
      { id: '1', label: 'Menu item label' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
    spacer: true,
  },
  {
    id: '2',
    title: 'Section Title Two',
    items: [
      { id: '5', label: 'Menu item label' },
      { id: '6', label: 'Menu item label' },
    ],
  },
];

const menuWithLink = [
  {
    id: '1',
    title: 'Section Title',
    items: [
      { id: '1', label: 'Menu item label' },
      { id: '2', label: 'Menu item label' },
      { id: '3', label: 'Menu item label' },
      { id: '4', label: 'Menu item label' },
    ],
    divider: true,
  },
  {
    id: '3',
    link: true,
    items: [
      { id: '7', label: 'Menu item label', href: '#' },
      { id: '8', label: 'Menu item label', href: '#' },
    ],
  },
];

const AppContent: React.FC = () => {
  const [menuShow, setMenuShow] = useState(false);
  const handleAction = () => {
    setMenuShow((show) => !show);
	};
	const [checked, setChecked] = useState(false);
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
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                name="normal"
              />
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                defaultChecked={true}
                name="default-checked"
              />
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                indeterminate
                name="indeterminate"
              />
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                error
                name="error"
              />
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                disabled
                name="disabled"
              />
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Checkbox Input</Heading>
            <VStack gap={'8'} alignItems={'flex-start'} maxW={'280'}>
              <CheckboxInput name="normal">
                <Text>Aliqua irure veniam</Text>
              </CheckboxInput>
              <CheckboxInput defaultChecked={true} name="default-checked">
                <Text>elit consectetur elit cillum non eu laborum aute</Text>
              </CheckboxInput>
              <CheckboxInput indeterminate name="indeterminate">
                <Text>
                  Ut fugiat tempor ullamco voluptate dolor labore amet magna
                  irure reprehenderit est irure est anim eiusmod commodo tempor
                  eu ut.
                </Text>
              </CheckboxInput>
              <CheckboxInput error name="error">
                <Text>et qui sit</Text>
              </CheckboxInput>
              <CheckboxInput disabled name="disabled">
                <Text>aliquip velit anim irure</Text>
              </CheckboxInput>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Radio</Heading>
            <VStack gap={'40'} alignItems={'start'}>
              <HStack>
                <Radio name="normal" />
                <Radio name="normal" defaultChecked={true} />
                <Radio name="normal" disabled />
                <Radio name="normal" error={true} />
              </HStack>
              <HStack>
                <HStack gap={'10'} alignItems={'center'}>
                  <Heading level="h3">Gender</Heading>
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
              <Toggle name="toggle-base" />
              <Toggle autoFocus={true} name="toggle-base" />
              <Toggle disabled name="toggle-base" />
              <Toggle error={true} name="toggle-base" />
            </HStack>
          </Section>
          <Section>
            <Heading level="h2">Toggle Input</Heading>
            <HStack gap={'40'} alignItems={'flex-end'}>
              <ToggleInput name="toggle-base">
                <Text as="div" size="16" weight={'normal'}>
                  Consequat ipsum ipsum adipisicing deserunt.
                </Text>
                <Text size="14">Deserunt proident officia nostrud.</Text>
              </ToggleInput>
              <ToggleInput name="toggle-base">
                <Text as="div" size="16" weight={'normal'}>
                  Consequat ipsum ipsum adipisicing deserunt.
                </Text>
                <Text size="14">Deserunt proident officia nostrud.</Text>
              </ToggleInput>
              <ToggleInput name="toggle-base">
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
                  <TextInput
                    size={'small'}
                    placeholder={'Enter Text'}
                    name="small"
                    id="small"
                  />
                  <Text role="small">Small</Text>
                </VStack>
                <VStack>
                  <TextInput
                    placeholder={'Enter Text'}
                    name="medium"
                    id="medium"
                  />
                  <Text role="medium">Medium</Text>
                </VStack>
                <VStack>
                  <TextInput
                    size={'large'}
                    placeholder={'Enter Text'}
                    name="large"
                    id="large"
                  />
                  <Text role="large">Large</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput
                    defaultValue="entered text"
                    name="default"
                    id="default"
                  />
                  <Text role="default">Default - Filled</Text>
                </VStack>
                <VStack>
                  <TextInput
                    data-error={true}
                    placeholder={'placeholder'}
                    name="error"
                    id="error"
                  />
                  <Text role="error">Error</Text>
                </VStack>
                <VStack>
                  <TextInput
                    disabled
                    placeholder={'placeholder'}
                    name="disabled"
                    id="disabled"
                  />
                  <Text role="disabled">Disabled</Text>
                </VStack>
              </HStack>
              <HStack gap={'40'} alignItems={'flex-end'}>
                <VStack>
                  <TextInput
                    autoSize={true}
                    placeholder={'Enter Text'}
                    name="auto"
                    id="auto"
                  />
                  <Text role="auto">Auto Size</Text>
                </VStack>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Textarea</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea name="small" placeholder="Small" size="small" />
                <Textarea name="medium" placeholder="Medium" />
                <Textarea name="large" placeholder="Large" size="large" />
              </HStack>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea
                  name="default"
                  placeholder="placeholder"
                  defaultValue="Default – Filled"
                />
                <Textarea name="disabled" placeholder="Disabled" disabled />
                <Textarea name="error" placeholder="Error" data-error={true} />
              </HStack>
              <HStack gap={'40'} alignItems={'flex-start'}>
                <Textarea name="auto" placeholder="Auto Size" autoSize={true} />
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Card</Heading>
            <VStack gap={'10'} alignItems={'flex-start'}>
              <Heading level="h3">Default</Heading>
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
              <Heading level="h3">Flat</Heading>
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
              <Heading level="h3">Example</Heading>
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
              <Heading level="h3">With Caret</Heading>
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
              <Heading level="h3">Without Caret</Heading>
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
              <Heading level="h3">Different Example</Heading>
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
                  <Text as="u">Text</Text>
                </Tooltip>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Breadcrumbs</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack>
                <Breadcrumbs
                  items={[
                    { id: '1', label: 'Home', href: '/' },
                    { id: '2', label: 'Integrations', href: '/' },
                    { id: '3', label: 'ShipEngine' },
                  ]}
                />
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Tags</Heading>
            <VStack gap={'40'} alignItems={'flex-start'}>
              <HStack>
                <Tag>Tag</Tag>
                <Tag hue="tan">Tag</Tag>
                <Tag hue="red">Tag</Tag>
                <Tag hue="tomato">Tag</Tag>
                <Tag hue="orange">Tag</Tag>
                <Tag hue="yellow">Tag</Tag>
                <Tag hue="green">Tag</Tag>
                <Tag hue="grass">Tag</Tag>
                <Tag hue="mint">Tag</Tag>
                <Tag hue="cyan">Tag</Tag>
                <Tag hue="blue">Tag</Tag>
                <Tag hue="indigo">Tag</Tag>
                <Tag hue="purple">Tag</Tag>
                <Tag hue="violet">Tag</Tag>
                <Tag hue="pink">Tag</Tag>
                <Tag hue="rose">Tag</Tag>
                <Tag hue="magenta">Tag</Tag>
              </HStack>
              <HStack>
                <Tag variant="bold">Tag</Tag>
                <Tag variant="bold" hue="tan">
                  Tag
                </Tag>
                <Tag variant="bold" hue="red">
                  Tag
                </Tag>
                <Tag variant="bold" hue="tomato">
                  Tag
                </Tag>
                <Tag variant="bold" hue="orange">
                  Tag
                </Tag>
                <Tag variant="bold" hue="yellow">
                  Tag
                </Tag>
                <Tag variant="bold" hue="green">
                  Tag
                </Tag>
                <Tag variant="bold" hue="grass">
                  Tag
                </Tag>
                <Tag variant="bold" hue="mint">
                  Tag
                </Tag>
                <Tag variant="bold" hue="cyan">
                  Tag
                </Tag>
                <Tag variant="bold" hue="blue">
                  Tag
                </Tag>
                <Tag variant="bold" hue="indigo">
                  Tag
                </Tag>
                <Tag variant="bold" hue="purple">
                  Tag
                </Tag>
                <Tag variant="bold" hue="violet">
                  Tag
                </Tag>
                <Tag variant="bold" hue="pink">
                  Tag
                </Tag>
                <Tag variant="bold" hue="rose">
                  Tag
                </Tag>
                <Tag variant="bold" hue="magenta">
                  Tag
                </Tag>
              </HStack>

              <HStack>
                <Tag iconName="aa-placeholder">Tag</Tag>
                <Tag iconName="aa-placeholder" hue="tan">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="red">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="tomato">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="orange">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="yellow">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="green">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="grass">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="mint">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="cyan">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="blue">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="indigo">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="purple">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="violet">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="pink">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="rose">
                  Tag
                </Tag>
                <Tag iconName="aa-placeholder" hue="magenta">
                  Tag
                </Tag>
              </HStack>
              <HStack>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="tan"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="red"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="tomato"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="orange"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="yellow"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="green"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="grass"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="mint"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="cyan"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="blue"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="indigo"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="purple"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="violet"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="pink"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="rose"
                >
                  Tag
                </Tag>
                <Tag
                  iconName="aa-placeholder"
                  iconPosition="right"
                  variant="bold"
                  hue="magenta"
                >
                  Tag
                </Tag>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Heading level="h2">Menu</Heading>
            <VStack
              gap={'40'}
              alignContent={'flex-start'}
              justifyContent={'flex-start'}
            >
              <HStack
                gap={'40'}
                alignItems={'start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Box>
                  <Text>Basic</Text>
                  <Menu
                    menuSection={menuData}
                    variant="single-select"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>With Description</Text>
                  <Menu
                    menuSection={menuWithDescription}
                    variant="single-select"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>Right Side Icon</Text>
                  <Menu
                    menuSection={menuWithIcon}
                    variant="single-select"
                    iconPlacement="right"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Box>
                  <Text>Left Side Icon</Text>
                  <Menu
                    menuSection={menuWithIcon}
                    variant="single-select"
                    iconPlacement="left"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>Checkbox multi select checkbox</Text>
                  <Menu
                    menuSection={multiLevelCheckboxSection}
                    variant="multi-select"
                    multiSelectType="checkbox"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>Checkbox multi select toggle</Text>
                  <Menu
                    menuSection={multiLevelToggleSection}
                    variant="multi-select"
                    multiSelectType="toggle"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Box>
                  <Text>With Links</Text>
                  <Menu
                    menuSection={menuWithLink}
                    variant="multi-select"
                    multiSelectType="toggle"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>Section title & divider</Text>
                  <Menu
                    menuSection={menuSectionTitleAndDivider}
                    variant="single-select"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
                <Box>
                  <Text>With Spacer</Text>
                  <Menu
                    menuSection={menuWithSpacer}
                    variant="single-select"
                    onChange={(val) => console.log('Selected', val)}
                  />
                </Box>
              </HStack>
              <HStack
                gap={'40'}
                alignItems={'start'}
                justifyContent={'flex-start'}
                width={'full'}
              >
                <Box color={{ base: 'slate.90', _dark: 'slate.0' }}>
                  <Text>Multi Level Menu</Text>
                  <Button onClick={handleAction}>
                    Action{' '}
                    {menuShow ? (
                      <Icon name="caret-up" />
                    ) : (
                      <Icon name="caret-down" />
                    )}
                  </Button>
                  {menuShow && (
                    <Menu
                      menuSection={menuWithChildren}
                      onChange={(val) => console.log('Selected', val)}
                    />
                  )}
                </Box>
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
