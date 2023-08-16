import type { WebpackConfigMutator } from '@teambit/webpack'

export function tsconfig(
  configMutator: WebpackConfigMutator,
): WebpackConfigMutator {
  const config = {
    files: [
      './config/base.json',
      './config/react-library.json',
      './config/vite.json',
    ],
  }

  /**
   * merge the config with the existing config
   */
  configMutator.merge(config)

  return configMutator
}
