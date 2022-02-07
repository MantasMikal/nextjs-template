/** @type {import('next').NextConfig} */

const path = require('path')
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  poweredByHeader: false,
  useFileSystemPublicRoutes: true,
  reactStrictMode: true,
  env: {
    environment: process.env.NODE_ENV
    // token: process.env.SENTRY_AUTH_TOKEN
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src/asset/svg/icon')],
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { dimensions: false }
        }
      ]
    })
    config.resolve.alias['@'] = path.join(__dirname, 'src')

    // Add support for video subtitle files
    config.module.rules.unshift({
      test: /\.vtt$/,
      loader: 'file-loader'
    })
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/asset/scss/settings')],
    prependData: `
      @use "sass:math";
      @import '~backline-mixins/src/backline-mixins';
      @import 'settings';
    `
  }
}

module.exports = withPlugins(
  [
    [
      {
        exclude: path.resolve(__dirname, 'src/asset/svg'),
        inlineImageLimit: 1
      }
    ],
    [withBundleAnalyzer]
    // (nextConfig) =>
    //   withSentryConfig(nextConfig, {
    //     silent: true,
    //     environment: process.env.NODE_ENV,
    //     token: process.env.SENTRY_AUTH_TOKEN
    //   })
  ],
  nextConfig
)
