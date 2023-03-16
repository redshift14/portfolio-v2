import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'zzii1ipf',
  dataset: 'production',
  apiVersion: '2023-03-15',
  useCdn: true,
  token: process.env.SANITY_TOKEN
})