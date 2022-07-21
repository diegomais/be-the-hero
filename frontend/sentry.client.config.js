import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
const SENTRY_ORG = process.env.SENTRY_ORG || process.env.NEXT_PUBLIC_SENTRY_ORG

Sentry.init({ dsn: SENTRY_DSN, org: SENTRY_ORG })
