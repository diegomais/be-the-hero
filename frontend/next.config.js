const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {}

const SentryWebpackPluginOptions = {}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
