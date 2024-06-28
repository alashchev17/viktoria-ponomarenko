import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio',
  },
  api: {
    projectId: 'fgy6qk8e',
    dataset: 'production',
  },
  // ...config continued
})
