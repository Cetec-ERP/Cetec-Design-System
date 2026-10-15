import { vis } from 'storybook-addon-vis/vitest-setup';
import { vi } from 'vitest';

// Freeze the date so Calendar and date menus show the same month, and the
// same "today", in every run. Only Date is faked; timers run normally.
vi.useFakeTimers({ toFake: ['Date'] });
vi.setSystemTime(new Date(2026, 0, 14, 12, 0, 0));

// Snapshot-only styles. Play functions run with normal motion, because some
// components wait for `transitionend`, which a 0s transition never fires.
const snapshotStyles = document.createElement('style');
snapshotStyles.textContent = `
  /* Storybook paints this through .sb-show-main, which Vitest does not set. */
  body {
    background: var(--cetec-colors-surface);
  }
  * {
    caret-color: transparent;
  }
`;
document.head.appendChild(snapshotStyles);

const nextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

// Same approach as Playwright's `animations: 'disabled'`: jump finite CSS
// animations and transitions to their end (their end events still fire), and
// cancel infinite ones such as spinners, which removes their transform.
function stopAnimations() {
  for (const animation of document.getAnimations()) {
    const { iterations } = animation.effect?.getTiming() ?? {};
    if (iterations === Infinity) {
      animation.cancel();
    } else {
      animation.finish();
    }
  }
}

// Icons are `<use href="sprite.svg#name">`. The sprite loads over the network
// and no event reports it, but a visible icon has no size until it arrives.
// Hidden icons (display: none) never get a size, so only visible ones count.
// Images report through `complete`. Give both up to 2s.
function iconPending(use: SVGUseElement) {
  const svg = use.ownerSVGElement;
  if (!svg || svg.getClientRects().length === 0) return false;
  return use.getBBox().width === 0;
}

async function mediaLoaded() {
  const deadline = performance.now() + 2000;
  const pending = () =>
    Array.from(document.querySelectorAll('use')).some(iconPending) ||
    Array.from(document.images).some((img) => !img.complete);
  while (pending() && performance.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
}

// Wait for fonts and media, settle motion, then two frames for layout and paint.
async function settle() {
  await document.fonts.ready;
  await mediaLoaded();
  await nextFrame();
  stopAnimations();
  await nextFrame();
  await nextFrame();
}

// One snapshot per theme. Panda compiles dark mode as `.dark` on an
// ancestor, and Storybook's theme switcher puts it on <body>.
vis.setup({
  auto: {
    async light() {
      document.body.classList.remove('dark');
      await settle();
    },
    async dark() {
      document.body.classList.add('dark');
      await settle();
    },
  },
});
