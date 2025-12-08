/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharUpperCase = require('../first-char-upper-case');

module.exports = (sliceName) => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`;
