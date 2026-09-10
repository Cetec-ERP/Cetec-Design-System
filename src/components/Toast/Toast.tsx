import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cx } from '@styled-system/css';
import {
  toast as toastRecipe,
  type ToastVariantProps,
} from '@styled-system/recipes';
import type { ColorToken } from '@styled-system/tokens';

import type { AlertTone } from '~/components/Alert';
import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

const toneIconNames: Record<AlertTone, IconNamesList | null> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'error',
  neutral: null,
};

const toneIconColors: Record<AlertTone, ColorToken> = {
  info: 'icon.info',
  success: 'icon.success',
  warning: 'icon.warning',
  danger: 'icon.danger',
  neutral: 'icon.subtle',
};

type ToastOwnProps = {
  /** Semantic tone. Selects the leading accent and the tone icon. */
  /** @default "neutral" */
  tone?: AlertTone;
  /** The toast message. */
  children: ReactNode;
  /** Leading action, normally a `Button`. */
  primaryAction?: ReactNode;
  /** Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`. */
  secondaryAction?: ReactNode;
  /**
   * Shows the close control, which calls `onDismiss`.
   *
   * @default true
   */
  dismissible?: boolean;
  /** Runs when the close control is activated or `duration` elapses. */
  onDismiss?: () => void;
  /**
   * Milliseconds before the toast calls `onDismiss` by itself. The countdown
   * pauses while the toast is hovered or contains focus and resumes from the
   * remaining time. Pass `null`, or omit it, for a toast that never times out.
   * `ToastProvider` supplies this value and always passes `null` for
   * `tone: 'danger'`.
   */
  duration?: number | null;
  /** Accessible label for the close control. @default "Dismiss" */
  dismissLabel?: string;
  /**
   * Animation phase. `closing` plays the exit animation; the owner removes the
   * toast once it finishes.
   *
   * @default "open"
   */
  state?: 'open' | 'closing';
};

/** Props accepted by {@link Toast}. Includes compatible native element props. */
export type ToastProps = Omit<
  BoxProps,
  keyof ToastVariantProps | keyof ToastOwnProps
> &
  Omit<ToastVariantProps, 'tone'> &
  ToastOwnProps;

/**
 * Confirms a non-blocking outcome in a transient, floating message.
 *
 * Applications normally queue toasts imperatively with `useToast` rather than
 * rendering this component, which is the presentation for one entry in a
 * `ToastProvider` stack. Render it directly only to place a toast outside that
 * stack. Use `Alert` when the message must stay until it is read.
 *
 * Renders a `div` with `role="alert"` when `tone` is `danger` and
 * `role="status"` otherwise. `tone="neutral"` renders no icon.
 *
 * @example
 * ```tsx
 * <Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>
 * ```
 */
export const Toast = (props: ToastProps) => {
  const {
    tone = 'neutral',
    children,
    primaryAction,
    secondaryAction,
    dismissible = true,
    onDismiss,
    duration = null,
    dismissLabel = 'Dismiss',
    state = 'open',
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = toastRecipe({ tone });

  const [paused, setPaused] = useState(false);
  const remainingRef = useRef<number>(duration ?? 0);
  const onDismissRef = useRef(onDismiss);

  onDismissRef.current = onDismiss;

  // Reseed the budget whenever the caller changes the lifetime. Declared before
  // the timer effect so a new `duration` is in place before the timer restarts.
  useEffect(() => {
    remainingRef.current = duration ?? 0;
  }, [duration]);

  useEffect(() => {
    if (duration === null || paused || state === 'closing') {
      return;
    }

    const startedAt = Date.now();
    const timer = setTimeout(() => {
      remainingRef.current = 0;
      onDismissRef.current?.();
    }, remainingRef.current);

    return () => {
      clearTimeout(timer);
      // Bank the unspent time so a resume continues instead of restarting.
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedAt),
      );
    };
  }, [duration, paused, state]);

  const iconName = toneIconNames[tone];
  const hasActions = Boolean(primaryAction ?? secondaryAction);

  return (
    <Box
      {...dsComponent('Toast')}
      role={tone === 'danger' ? 'alert' : 'status'}
      aria-atomic="true"
      data-state={state}
      data-paused={paused ? 'true' : undefined}
      className={cx(classes.root, className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      {...otherProps}
    >
      {iconName && (
        <Box className={classes.icon}>
          <Icon
            name={iconName}
            size="20"
            fill={toneIconColors[tone]}
            aria-hidden="true"
          />
        </Box>
      )}
      <Box className={classes.content}>
        <Text textStyle="body.sm" color="text" className={classes.message}>
          {children}
        </Text>
        {hasActions && (
          <Box className={classes.actions}>
            {primaryAction}
            {secondaryAction}
          </Box>
        )}
      </Box>
      {dismissible && (
        <IconButton
          variant="ghost"
          size="sm"
          iconName="x"
          altText={dismissLabel}
          onClick={onDismiss}
          className={classes.dismiss}
        />
      )}
    </Box>
  );
};
