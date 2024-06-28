import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { ukUALocale } from '@sanity/locale-uk-ua'
import schemas from './src/schemas'

const visionPlugin = isDev ? [visionTool()] : []

const config = defineConfig({
  name: 'default',
  title: 'Viktoria Ponomarenko Personal Website',
  projectId: 'fgy6qk8e',
  dataset: 'production',
  apiVersion: '2022-03-07',
  basePath: '/dashboard',
  plugins: [...visionPlugin, structureTool(), ukUALocale()],
  schema: { types: schemas },
})

export default config
