import { FunctionTemplateParameters } from '@aws-amplify/amplify-function-plugin-interface';
import { templateRoot } from '../utils/constants';
import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import { getDstMap } from '../utils/destFileMapper';

const pathToTemplateFiles = path.join(templateRoot, 'basic');

export function provideBasic(): Promise<FunctionTemplateParameters> {
  const prefixLen = pathToTemplateFiles.length + 1;
  const files = glob.sync(`${pathToTemplateFiles}/**`)
    .filter((file) => fs.statSync(file).isFile())
    .map((file) => file.substring(prefixLen));
  return Promise.resolve({
    functionTemplate: {
      sourceRoot: pathToTemplateFiles,
      sourceFiles: files,
      defaultEditorFile: path.join('src', 'src', 'main.rs'),
      destMap: getDstMap(files),
    },
  });
}
