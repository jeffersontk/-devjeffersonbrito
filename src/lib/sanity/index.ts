import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_DATASET
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION
const token = process.env.NEXT_PUBLIC_TOKEN

const client = createClient({
  projectId,
  dataset,
  apiVersion, 
  useCdn: false,
  token
})


export default client;


