import { AutoRc } from 'auto';

import { INpmConfig } from '@auto-it/npm';

const npmOptions: INpmConfig = {
  exact: true,
  setRcToken: false,
  forcePublish: false,
};

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    plugins: ['released', ['npm', npmOptions]],
    onlyPublishWithReleaseLabel: true,
    baseBranch: 'main',
    noVersionPrefix: true,
    release: {
      prerelease: true,
    },
    versionBranches: false,
    prereleaseBranches: ['main'],
  };
}
