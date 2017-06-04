// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  APP_TITLE: "WearableHub",

  AUTH_BASE_URL: "http://localhost:8080",
  API_BASE_URL: "http://localhost:8080",
  WS_BASE_URL: "http://localhost:8090",
  POKE_BASE_URL: "https://pokeapi.co/api/v2/"
};
