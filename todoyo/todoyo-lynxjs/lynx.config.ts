import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
  source: {
    entry: './src/index.tsx',
    // Assicura che le immagini siano incluse come asset
    assetsInclude: [/\.(png|jpe?g|gif|svg|webp)$/i],
    alias: {
      '@assets': './assets'
    }
  },
  output: {
    dataUriLimit: 0,
    filename: {
      image: 'assets/images/[name].[contenthash:8][ext]'
    }
  },
  environments: {
    lynx: {},
    web: {
      source: { entry: { web: './src/index.tsx' } },
    },
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
    pluginSass({}),
  ],
})



