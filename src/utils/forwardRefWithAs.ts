import * as React from 'react';

export type PropsWithAs<P, E extends React.ElementType> = P & { as?: E };

export type PolymorphicRef<E extends React.ElementType> = React.ComponentPropsWithRef<E>['ref'];

/**
 * This helper function wraps React.forwardRef and ensures that generics
 * for the "as" prop are maintained. This way, components built with it will have
 * proper ref and prop types for whichever element type is chosen.
 */
function forwardRefWithAs<P, E extends React.ElementType>(
  render: (props: PropsWithAs<P, E>, ref: PolymorphicRef<E>) => React.ReactElement | null,
) {
  return React.forwardRef(render) as unknown as <T extends React.ElementType = E>(
    props: PropsWithAs<P, T> & { ref?: PolymorphicRef<T> }
  ) => React.ReactElement | null;
}

export default forwardRefWithAs;