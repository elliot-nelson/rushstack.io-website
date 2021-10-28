---
title: Core plugins
navigation_source: docs_nav
---

## Built-in plugins

These plugins are bundled with the `@rushstack/heft` package and are enabled by default:

| Plugin  | Description |
| ------------- | ------------- |
| [ApiExtractorPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts) | Implements the [api-extractor](../heft_tasks/api-extractor) task |
| [CopyFilesPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyFilesPlugin.ts) | Implements the [copy-files](/heft_tasks/copy-files) task |
| [CopyStaticAssetsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts) | Implements the [copy-static-assets](/heft_tasks/copy-static-assets) task |
| [DeleteGlobsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/DeleteGlobsPlugin.ts) | Implements the [delete-globs](/heft_tasks/delete-globs) task |
| [NodeServicePlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/NodeServicePlugin.ts) | Implements the [node-service](../heft_tasks/node-service) task for developing Node.js services |
| [ProjectValidatorPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ProjectValidatorPlugin.ts) | An internal Heft plugin that performs basic validation such as warning about obsolete files in the `.heft` folder |
| [SassTypingsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/SassTypingsPlugin/SassTypingsPlugin.ts) | Implements the [sass-typings](../heft_tasks/sass-typings) task |
| [TypeScriptPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts) | Implements the [typescript](../heft_tasks/typescript.md), [eslint](../heft_tasks/eslint), and [tslint](../heft_tasks/tslint) tasks |

## Packaged plugins

The following core plugins are published as separate NPM packages, and must be explicitly loaded using your
project's [heft.json](/heft_configs/heft_json) config file:

- [@rushstack/heft-jest-plugin](https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-jest-plugin) - Implements the [jest](/heft_tasks/jest) task for unit tests
- [@rushstack/heft-webpack5-plugin](https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-webpack5-plugin) - Implements the [webpack](/heft_tasks/webpack) bundling and `webpack-dev-server` functionality for Webpack 5
- [@rushstack/heft-webpack4-plugin](https://github.com/microsoft/rushstack/tree/master/heft-plugins/heft-webpack4-plugin) - Supports older projects using Webpack 4
