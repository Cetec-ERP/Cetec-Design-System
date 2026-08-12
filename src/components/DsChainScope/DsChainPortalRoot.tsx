import type { ReactNode } from 'react';

import { dsChainValue, useDsChain } from '~/utils/dsChain';

type DsChainPortalRootProps = {
  /** Portal contents that need DOM ancestry back to the opening subtree. */
  children?: ReactNode;
};

/**
 * Wraps portal contents in an element stamped with the resolved chain.
 *
 * Internal. Render it as the outermost child of a `FloatingPortal` so the
 * chain is read at the portal's position in the React tree, which is where the
 * opening component sits, rather than at the component function's own
 * position. Reading it in the component body instead would miss any scope the
 * component's own root `Box` opened for its subtree.
 *
 * The attribute is written during render, never from an effect: portal content
 * mounts late, and an effect-stamped attribute can lose the race against a
 * click that lands immediately after paint.
 *
 * The wrapper is an unstyled, statically positioned `div`. Every floating
 * element it wraps is absolutely or fixed positioned, so it stays out of flow
 * and the wrapper contributes no layout box of its own.
 */
export const DsChainPortalRoot = ({ children }: DsChainPortalRootProps) => {
  const chain = useDsChain();

  return <div data-ds-chain={dsChainValue(chain)}>{children}</div>;
};
