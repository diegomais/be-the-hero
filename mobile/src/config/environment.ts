import Constants from 'expo-constants';

const ENV = {
  dev: {
    apiURL: 'http://localhost:3333',
    email: 'diegomais.dev@gmail.com',
  },
  staging: {
    apiURL: 'https://diegomais-bethehero.herokuapp.com',
    email: 'diegomais.dev@gmail.com',
  },
  prod: {
    apiURL: 'https://diegomais-bethehero.herokuapp.com',
    email: 'diegomais.dev@gmail.com',
  },
};

export default function getEnvironment() {
  const { releaseChannel } = Constants.manifest;

  if (releaseChannel === undefined) {
    // no releaseChannel (is undefined) in dev
    return ENV.dev; // dev env settings
  }
  if (releaseChannel.indexOf('prod') !== -1) {
    // matches prod-v1, prod-v2, prod-v3
    return ENV.prod; // prod env settings
  }
  if (releaseChannel.indexOf('staging') !== -1) {
    // matches staging-v1, staging-v2
    return ENV.staging; // stage env settings
  }
  return ENV.dev;
}
