# @aotimme/amplify-rust-function-template-provider

This [AWS Amplify plugin](https://docs.amplify.aws/cli/plugins/plugins/) provides templates for Lambda functions in Rust.

A Rust function runtime provider plugin, such as `@aotimme/amplify-rust-function-runtime-provider`, is required to enable Rust lambda functions in AWS Amplify.

## Installation

To use this plugin, follow the instructions provided by AWS Amplify: https://docs.amplify.aws/cli/plugins/plugins/#plugin-installation

In particular,
```shell
npm install --global @aotimme/amplify-rust-function-template-provider
amplify plugin add @aotimme/amplify-rust-function-template-provider
```

## Usage

After installing this plugin, when you create Lambda functions in Rust (using a plugin such as `@aotimme/amplify-rust-function-runtime-provider`), you will have the templates provided by this plugin as options.