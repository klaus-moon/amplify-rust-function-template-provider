import { FunctionTemplateContributorFactory } from '@aws-amplify/amplify-function-plugin-interface';

import { provideBasic } from './providers/basicProvider';

export const functionTemplateContributorFactory: FunctionTemplateContributorFactory = context => {
  return {
    contribute: request => {
      switch (request.selection) {
        case 'basic': {
          return provideBasic();
        }
        default: {
          throw new Error(`Unknown template selection [${request.selection}]`);
        }
      }
    },
  };
};
