/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const resolveRoot = require('../resolve-root');
const firstCharUpperCase = require('../first-char-upper-case');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');
const camelCase = require('../camel-case');



module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    }
    catch (e) {
      console.log('Не удалось создать UI директорию');
    }
  };

  const createComponent = async () => {
    try {
      const styleName = camelCase(sliceName);
      const componentName = firstCharUpperCase(styleName);

      await fs.mkdir(resolveUIPath(sliceName));
      await fs.writeFile(
        resolveUIPath(sliceName, 'index.tsx'),
        componentTemplate(styleName, componentName),
      );
      await fs.writeFile(
        resolveUIPath(sliceName, 'index.stories.tsx'),
        storyTemplate(layer, styleName, componentName),
      );
      await fs.writeFile(
        resolveUIPath(sliceName, 'index.module.scss'),
        styleTemplate(styleName),
      );
    }
    catch (e) {
      console.log('Не удалось создать компонент');
    }
  };

  await createUIDir();
  await createComponent();
};
