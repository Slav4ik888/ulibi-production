/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const resolveRoot = require('../resolve-root');
const firstCharUpperCase = require('../first-char-upper-case');
const camelCase = require('../camel-case');



module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(camelCase(sliceName));
  const schemaName = `${componentName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${sliceName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types';
`,
    );
  }
  catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
