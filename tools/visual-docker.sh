#!/usr/bin/env bash
# Runs the visual tests in the Playwright Linux image that CI uses, so local
# screenshots match CI pixel for pixel. Fonts and fallback glyphs differ on
# macOS and on a plain Ubuntu runner, so baselines must come from this image.
#
#   npm run test:visual:docker                     compare every story
#   npm run test:visual:docker -- src/components/Tabs
#   npm run test:visual:docker:update              regenerate every baseline
#   npm run test:visual:docker:update -- src/components/Tabs
#
# The image tag follows the Playwright version in package-lock.json. The
# workflows pin the same tag; update them together when Playwright changes.
set -euo pipefail

cd "$(dirname "$0")/.."

if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Start Docker Desktop and try again." >&2
  exit 1
fi

version=$(node -p "require('./package-lock.json').packages['node_modules/playwright'].version")
image="mcr.microsoft.com/playwright:v${version}-noble"

for workflow in .github/workflows/ci-test.yml .github/workflows/update-visual-baselines.yml; do
  if ! grep -q "$image" "$workflow"; then
    echo "$workflow does not use $image. Update its container image to match package-lock.json." >&2
    exit 1
  fi
done

update=false
if [ "${1:-}" = "--update" ]; then
  update=true
  shift
fi

# A full update starts from an empty folder, so baselines for deleted stories
# do not linger.
if [ "$update" = true ] && [ "$#" -eq 0 ]; then
  rm -rf __vis__/linux/__baselines__
fi

vitest_args=(--project=visual)
if [ "$update" = true ]; then
  vitest_args+=(--update)
fi

# CI runs on x86, so force amd64 even on Apple silicon. node_modules lives in
# a named volume: the Linux install must not mix with the macOS one, and the
# volume keeps it between runs.
docker run --rm \
  --platform linux/amd64 \
  --ipc=host \
  -e CI=true \
  -v "$PWD":/work \
  -v cetec-ds-visual-node-modules:/work/node_modules \
  -w /work \
  "$image" \
  bash -c '
    set -e
    lock_hash=$(sha256sum package-lock.json | cut -d" " -f1)
    if [ "$(cat node_modules/.lock-hash 2>/dev/null)" != "$lock_hash" ]; then
      npm ci --no-audit --no-fund
      echo "$lock_hash" > node_modules/.lock-hash
    fi
    npm run prepare
    npx vitest run "$@"
  ' bash "${vitest_args[@]}" "$@"
