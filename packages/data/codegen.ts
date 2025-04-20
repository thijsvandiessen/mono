import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/generated/schema.graphql',
  documents: ['./**/*.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    './src/generated/': {
      preset: 'client',
      config: {
        withHooks: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, string>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
        useTypeImports: true,
        verbatimModuleSyntax: true,
      },
      presetConfig: {
        persistedDocuments: true,
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
    './src/generated/introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: false,
        schemaDescription: true,
        federation: true,
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
  ignoreNoDocuments: true,
}

export default config
