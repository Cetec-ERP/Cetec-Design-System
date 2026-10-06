import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { Box } from '../Box';
import { Code } from '../Code';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { CodeBlock } from './CodeBlock';

import type { Meta, StoryObj } from '@storybook/react';

const jsonSample = `{
  "invoice": 104233,
  "customer": "ACME-001",
  "status": "submitted",
  "lines": [
    { "part": "PN-4471-B", "qty": 12, "price": 18.5 },
    { "part": "PN-0093-A", "qty": 4, "price": 210 }
  ],
  "total": 1062
}`;

const sqlSample = `SELECT o.ordernum, o.customer_id, SUM(l.qty * l.price) AS total
FROM orders o
JOIN order_lines l ON l.order_id = o.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL 30 DAY
GROUP BY o.ordernum, o.customer_id
ORDER BY total DESC;`;

const longJson = JSON.stringify(
  Array.from({ length: 20 }, (_, index) => ({
    line: index + 1,
    part: `PN-${String(1000 + index)}`,
    qty: (index % 5) + 1,
  })),
  null,
  2,
);

const logSample = `2026-10-06 09:14:02 INFO  Sync started for location MAIN
2026-10-06 09:14:03 WARN  Part PN-4471-B has no default bin; using RECEIVING, which may delay the pick list for every open work order that references it
2026-10-06 09:14:05 INFO  Sync finished: 412 records, 1 warning`;

const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    code: jsonSample,
    language: 'json',
  },
  decorators: [
    (Story) => (
      <Box maxW="2xl">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: { title: 'Submit request', language: 'json' },
};

export const Inverse: Story = {
  args: {
    tone: 'inverse',
    title: 'query.sql',
    language: 'sql',
    code: sqlSample,
  },
};

export const Sizes: Story = {
  render: () => (
    <Box display="grid" gap="16">
      <CodeBlock size="sm" title="size=sm" code={sqlSample} />
      <CodeBlock size="md" title="size=md" code={sqlSample} />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const LineNumbers: Story = {
  args: { lineNumbers: true, title: 'payload.json' },
};

export const LineNumbersFromStart: Story = {
  args: {
    lineNumbers: { start: 98 },
    title: 'Lines 98–107',
  },
};

export const Wrap: Story = {
  args: { wrap: true, code: logSample, language: 'log', title: 'sync.log' },
};

export const ScrollsByDefault: Story = {
  args: { code: logSample, language: 'log', title: 'sync.log' },
};

export const MaxLines: Story = {
  args: { maxLines: 8, code: longJson, title: 'Order lines' },
};

export const NotCopyable: Story = {
  args: { copyable: false },
};

export const CopyWritesPlainText: Story = {
  name: 'Test: copy writes plain text',
  args: {
    code: 'line one\nline two\n',
    lineNumbers: true,
    title: 'copy.txt',
  },
  play: async ({ canvasElement }) => {
    const writeText = fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });

    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Copy code' }));

    // Line numbers and the trailing line break are not copied.
    expect(writeText).toHaveBeenCalledWith('line one\nline two');
    await waitFor(() =>
      expect(canvas.getByRole('status')).toHaveTextContent('Copied'),
    );
  },
};

export const FocusableOnlyWhenOverflowing: Story = {
  name: 'Test: focusable only when overflowing',
  render: () => (
    <Box display="grid" gap="16">
      <CodeBlock data-testid="short" code="const ready = true;" />
      <CodeBlock data-testid="long" code={logSample} language="log" />
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const short = canvas.getByTestId('short');
    const long = canvas.getByTestId('long');

    expect(short.querySelector('[tabindex]')).toBeNull();
    await waitFor(() => {
      const region = within(long).getByRole('region', {
        name: 'log code block',
      });
      expect(region).toHaveAttribute('tabindex', '0');
    });
  },
  parameters: { controls: { disable: true } },
};

export const ExpandToggle: Story = {
  name: 'Test: expand toggle',
  args: { maxLines: 4, code: longJson },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', { name: /Show all/ });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(canvas.getByRole('button', { name: 'Show less' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  },
};

export const ExIntegrationSetup: Story = {
  name: 'Ex: Integration Setup',
  render: () => (
    <Box display="grid" gap="12" maxW="prose">
      <Heading level="h3">Connect an MCP client</Heading>
      <Text>
        Add the server to your client configuration. Replace{' '}
        <Code>&lt;token&gt;</Code> with the value of <Code>JSON API Token</Code>{' '}
        from Admin &gt; Configuration.
      </Text>
      <CodeBlock
        tone="inverse"
        title="claude_desktop_config.json"
        language="json"
        code={`{
  "mcpServers": {
    "cetec": {
      "url": "https://example.cetecerp.com/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}`}
      />
      <Text>Then restart the client and run:</Text>
      <CodeBlock tone="inverse" language="shell" code="claude mcp list" />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const ExSubmissionLog: Story = {
  name: 'Ex: Submission Log',
  render: () => (
    <Box display="grid" gap="12">
      <CodeBlock
        title="Submit request"
        language="json"
        code={jsonSample}
        maxLines={6}
      />
      <CodeBlock
        title="Submit response (HTTP 200)"
        language="json"
        code={longJson}
        maxLines={6}
      />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};
