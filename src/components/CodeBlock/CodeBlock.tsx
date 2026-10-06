import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

import { cx } from '@styled-system/css';
import { codeBlock, type CodeBlockVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { useClipboard } from '~/system/hooks/clipboard.hook';
import { dsComponent } from '~/utils/dsComponent';
import { dsPart } from '~/utils/dsPart';
import { splitProps } from '~/utils/splitProps';
import { useControllableState } from '~/utils/useControllableState';

type CodeBlockOwnProps = {
  /**
   * The code to display, as plain text. Takes precedence over `children`.
   * One trailing line break is removed.
   */
  code?: string;
  /** The code to display, as plain text, when `code` is not provided. */
  children?: string;
  /**
   * Programming or data language, such as `sql` or `json`. Rendered as
   * `data-language` and a `language-*` class, and used in the accessible name
   * when there is no string `title`. It does not apply syntax highlighting.
   */
  language?: string;
  /**
   * Header text, such as a file name or a short label. Renders a header bar
   * that holds the title and the copy button.
   */
  title?: ReactNode;
  /**
   * Shows a copy button. The button copies the plain text, never the line
   * numbers, and announces the result to screen readers.
   *
   * @default true
   */
  copyable?: boolean;
  /**
   * Accessible label and tooltip for the copy button.
   *
   * @default "Copy code"
   */
  copyLabel?: string;
  /**
   * Number of lines to show before the block collapses behind a "Show all"
   * button. Counts source lines; a wrapped line counts once.
   */
  maxLines?: number;
  /** Controlled expanded state when `maxLines` collapses the block. */
  expanded?: boolean;
  /**
   * Initial expanded state when `expanded` is not provided.
   *
   * @default false
   */
  defaultExpanded?: boolean;
  /** Runs when the user expands or collapses the block. */
  onExpandedChange?: (expanded: boolean) => void;
  /**
   * Shows a line number beside each line. Pass `{ start }` to number from a
   * value other than 1. Line numbers are hidden from screen readers and are
   * not copied.
   *
   * @default false
   */
  lineNumbers?: boolean | { start: number };
};

/** Props accepted by {@link CodeBlock}. Includes compatible native element props. */
export type CodeBlockProps = Omit<
  BoxProps,
  keyof CodeBlockVariantProps | keyof CodeBlockOwnProps
> &
  Omit<CodeBlockVariantProps, 'lineNumbers' | 'collapsed'> &
  CodeBlockOwnProps;

const stripTrailingNewline = (value: string) => value.replace(/\r?\n$/, '');

/**
 * Displays read-only, multi-line code or machine output with a copy button.
 *
 * Renders native `pre` and `code` elements. Long lines scroll horizontally by
 * default; set `wrap` for prose-like output such as logs or email bodies. Use
 * `maxLines` to collapse long output behind a "Show all" button, and `title`
 * for a file name or label. Use `Code` for code inside a sentence.
 *
 * When the content overflows, the scroll area becomes a labelled, focusable
 * region so keyboard users can scroll it. The copy button announces "Copied"
 * through a polite live region. The block does not highlight syntax.
 *
 * `tone="inverse"` follows the theme: it is dark in the light theme and light
 * in the dark theme.
 *
 * @example
 * ```tsx
 * <CodeBlock title="Request" language="json" code={prettyJson} maxLines={12} />
 * ```
 */
export const CodeBlock = (props: CodeBlockProps) => {
  const {
    code: codeProp,
    children,
    language,
    title,
    copyable = true,
    copyLabel = 'Copy code',
    maxLines,
    expanded: expandedProp,
    defaultExpanded = false,
    onExpandedChange,
    lineNumbers = false,
    tone = 'default',
    size,
    wrap,
    style,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const text = stripTrailingNewline(codeProp ?? children ?? '');
  const lines = text.split(/\r?\n/);
  const lineCount = lines.length;
  const showLineNumbers = lineNumbers !== false;
  const lineStart = typeof lineNumbers === 'object' ? lineNumbers.start : 1;
  const lastLineNumber = lineStart + lineCount - 1;

  const [expanded, setExpanded] = useControllableState({
    value: expandedProp,
    defaultValue: defaultExpanded,
    onChange: onExpandedChange,
  });
  const canCollapse = maxLines !== undefined && lineCount > maxLines;
  const collapsed = canCollapse && !expanded;

  const classes = codeBlock({
    tone,
    size,
    wrap,
    lineNumbers: showLineNumbers,
    collapsed,
  });

  const { copy, copied, failed } = useClipboard();

  const labelId = useId();
  const contentId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) return undefined;

    const measure = () => {
      setOverflowing(
        element.scrollWidth > element.clientWidth ||
          element.scrollHeight > element.clientHeight,
      );
    };
    measure();

    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [text, collapsed, wrap, showLineNumbers]);

  const labelSource = typeof title === 'string' ? title : language;
  const label = labelSource ? `${labelSource} code block` : 'Code block';

  const rootStyle = {
    '--code-block-max-lines': maxLines,
    '--code-block-gutter': `${String(Math.max(lastLineNumber, 1)).length}ch`,
    ...style,
  } as CSSProperties;

  const copyButton = copyable ? (
    <IconButton
      {...dsPart('copy')}
      iconName={copied ? 'check' : 'copy'}
      altText={copied ? 'Copied' : copyLabel}
      variant={tone === 'inverse' ? 'primary' : 'ghost'}
      size="sm"
      onClick={() => {
        void copy(text);
      }}
    />
  ) : null;

  return (
    <Box
      {...dsComponent('CodeBlock')}
      className={cx(classes.root, className)}
      data-language={language}
      style={rootStyle}
      {...otherProps}
    >
      <Box as="span" id={labelId} srOnly>
        {label}
      </Box>

      {title !== undefined && (
        <Box className={classes.header}>
          <Box className={classes.title}>{title}</Box>
          {copyButton && <Box className={classes.actions}>{copyButton}</Box>}
        </Box>
      )}
      {title === undefined && copyButton && (
        <Box className={classes.floatingActions}>{copyButton}</Box>
      )}

      <Box
        ref={contentRef}
        id={contentId}
        className={classes.content}
        {...(overflowing && {
          tabIndex: 0,
          role: 'region',
          'aria-labelledby': labelId,
        })}
      >
        <Box as="pre" className={classes.pre}>
          <Box
            as="code"
            className={cx(classes.code, language && `language-${language}`)}
          >
            {showLineNumbers
              ? lines.map((line, index) => (
                  <Box
                    as="span"
                    // Lines are positional and never reorder.

                    key={index}
                    className={classes.line}
                  >
                    <Box
                      as="span"
                      aria-hidden="true"
                      className={classes.lineNumber}
                      data-line={lineStart + index}
                    />
                    {line}
                  </Box>
                ))
              : text}
          </Box>
        </Box>
      </Box>

      {canCollapse && (
        <Box
          as="button"
          type="button"
          {...dsPart('expand')}
          className={classes.expand}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded(!expanded)}
        >
          <Icon
            name={expanded ? 'collapse-vertical' : 'expand-vertical'}
            size="16"
            fill="current"
            aria-hidden="true"
          />
          {expanded ? 'Show less' : `Show all ${lineCount} lines`}
        </Box>
      )}

      <Box as="span" role="status" aria-live="polite" srOnly>
        {copied ? 'Copied' : failed ? 'Copy failed' : ''}
      </Box>
    </Box>
  );
};
