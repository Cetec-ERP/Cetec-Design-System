type ShadowLayer = {
  x: string;
  y: string;
  blur: string;
  color: string;
  spread?: string;
};

const sizeToken = (value: string) => `{sizes.${value}}`;
const colorToken = (value: string) => `{${value}}`;

const formatBoxShadowLayer = (layer: ShadowLayer) =>
  [
    sizeToken(layer.x),
    sizeToken(layer.y),
    sizeToken(layer.blur),
    layer.spread ? sizeToken(layer.spread) : undefined,
    colorToken(layer.color),
  ]
    .filter(Boolean)
    .join(' ');

const formatDropShadowLayer = (layer: ShadowLayer) =>
  `dropShadow(${[sizeToken(layer.x), sizeToken(layer.y), sizeToken(layer.blur), colorToken(layer.color)].join(' ')})`;

export const elevationShadowDefinitions = {
  zero: [{ x: '0', y: '0', blur: '0', color: 'colors.transparent' }],
  raised: [
    { x: '0', y: '0', blur: '1', color: 'colors.shadow.raised.1' },
    { x: '0', y: '1', blur: '1', color: 'colors.shadow.raised.2' },
  ],
  elevated: [
    { x: '0', y: '0', blur: '1', color: 'colors.shadow.elevated.1' },
    { x: '0', y: '1', blur: '2', color: 'colors.shadow.elevated.2' },
    { x: '0', y: '4', blur: '6', color: 'colors.shadow.elevated.3' },
  ],
  overlay: [
    { x: '0', y: '0', blur: '1', color: 'colors.shadow.overlay.1' },
    { x: '0', y: '1', blur: '2', color: 'colors.shadow.overlay.2' },
    { x: '0', y: '6', blur: '12', color: 'colors.shadow.overlay.3' },
    { x: '0', y: '8', blur: '12', color: 'colors.shadow.overlay.4' },
    { x: '0', y: '8', blur: '16', color: 'colors.shadow.overlay.5' },
  ],
  overflow: [
    { x: '0', y: '0', blur: '1', color: 'colors.shadow.overflow.1' },
    { x: '0', y: '1', blur: '2', color: 'colors.shadow.overflow.2' },
    { x: '0', y: '2', blur: '6', color: 'colors.shadow.overflow.3' },
  ],
} as const;

export type ElevationShadowName = keyof typeof elevationShadowDefinitions;
export type DropShadowName = Exclude<ElevationShadowName, 'overflow'>;

const joinShadowLayers = (
  layers: readonly ShadowLayer[],
  formatter: (layer: ShadowLayer) => string,
  separator: string,
) => layers.map(formatter).join(separator);

export const getBoxShadowPrimitive = (name: ElevationShadowName) =>
  joinShadowLayers(
    elevationShadowDefinitions[name],
    formatBoxShadowLayer,
    ', ',
  );

export const getDropShadowPrimitive = (name: DropShadowName) =>
  joinShadowLayers(
    elevationShadowDefinitions[name],
    formatDropShadowLayer,
    ' ',
  );
