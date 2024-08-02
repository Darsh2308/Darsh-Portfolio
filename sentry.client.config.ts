import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4c609c8566a44ce4b908093926e47ed1@o4507696431890432.ingest.us.sentry.io/4507696434708480",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
