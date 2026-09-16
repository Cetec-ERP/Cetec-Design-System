import { createContext, useContext } from 'react';

/** Resolved SVG sprite configuration shared by {@link IconProvider}. */
type IconConfigContextValue = {
  spritePath: string;
};

/** Default sprite configuration used when no {@link IconProvider} is present. */
export const defaultIconConfigContextValue: IconConfigContextValue = {
  spritePath: '/sprite.svg',
};

/** Context backing {@link IconProvider}; prefer the provider over direct use. */
export const IconConfigContext = createContext<IconConfigContextValue>(
  defaultIconConfigContextValue,
);

/**
 * Returns the sprite path supplied by the nearest {@link IconProvider}.
 * Falls back to `/sprite.svg` when no provider is present.
 */
export const useIconConfig = () => useContext(IconConfigContext);
