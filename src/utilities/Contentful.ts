import * as contentful from 'contentful';

// creating token for contentful
const client = contentful.createClient({
  space: '5yowirp734pz',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export default client;