import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { isLocal } from '@utils';

export function initSentry() {
  // eslint-disable-next-line no-constant-condition
  if (!isLocal() || true) {
    Sentry.init({
      environment: process.env.ENVIRONMENT_NAME,
      dsn: process.env.SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0
    });
  }
}

export function reportError(error, errorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}
