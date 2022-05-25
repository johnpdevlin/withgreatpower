import React from 'react'

import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const config = ({
  projectId: 'icrfvxq5',
  dataset: 'wgp',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
});

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);

