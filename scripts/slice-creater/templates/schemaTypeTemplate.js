/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharUpperCase = require('../first-char-upper-case');
const camelCase = require('../camel-case');

module.exports = (sliceName) => `export interface ${firstCharUpperCase(camelCase(sliceName))}Schema {
  
}
`;
