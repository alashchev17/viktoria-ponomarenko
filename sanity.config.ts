import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { ukUALocale } from '@sanity/locale-uk-ua'

import schemas from './src/schemas'

const visionPlugin = isDev ? [visionTool()] : []

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string

const config = defineConfig({
  name: 'default',
  title: "Viktoria's Website",
  projectId,
  dataset,
  apiVersion,
  basePath: '/dashboard',
  plugins: [structureTool(), ...visionPlugin, ukUALocale()],
  schema: { types: schemas },
})

export default config
