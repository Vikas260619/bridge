// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  auth_api: process.env.NX_AUTH_API,
  graphql_api: process.env.NX_GRAPHQL_API,
};
