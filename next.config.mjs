import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any other Next.js configurations you need here
};

// Sentry configuration options
const sentryConfig = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  silent: true,
  org: "mavericks-fx",
  project: "javascript-nextjs",
};

// Sentry client-side options
const sentryClientOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Sentry server-side options
const sentryServerOptions = {
  org: "mavericks-fx",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryConfig, sentryClientOptions, sentryServerOptions);
