import type { KeyboardEventHandler, Ref } from 'react';

import { Chip } from '../Chip';

type AutocompleteTokenProps = {
  className?: string;
  disabled?: boolean;
  dismissButtonRef?: Ref<HTMLButtonElement>;
  label: string;
  onDismiss: () => void;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  size: 'sm' | 'md';
};

export const AutocompleteToken = (props: AutocompleteTokenProps) => {
  const {
    className,
    disabled,
    dismissButtonRef,
    label,
    onDismiss,
    onKeyDown,
    size,
  } = props;

  return (
    <Chip
      className={className}
      size={size}
      dismissable
      disabled={disabled}
      dismissButtonRef={dismissButtonRef}
      dismissButtonTabIndex={-1}
      onDismiss={onDismiss}
      onDismissKeyDown={onKeyDown}
    >
      {label}
    </Chip>
  );
};
