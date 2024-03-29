import path from 'path';
import { BuildPaths, BuildProject } from '../build/types/config';
import { DefinePlugin, Configuration, RuleSetRule } from 'webpack';
import { buildSvgLoader, buildCssLoaders } from '../build/loaders';



export default ({ config }: { config: Configuration}) => {
  const paths: BuildPaths = {
    build        : '',
    html         : '',
    entry        : '',
    locales      : '',
    buildLocales : '',
    src          : path.resolve(__dirname, '..', '..', 'src')
  };

  config!.resolve!.modules!.push(paths.src);
  // config.resolve.extensions.push('.ts', '.tsx');
  // eslint-disable-next-line no-param-reassign
  const rules = config!.module!.rules as RuleSetRule[];
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule;
  });

  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoaders(true));
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__  : JSON.stringify(true),
    __API_URL__ : JSON.stringify(''),
    __PROJECT__ : JSON.stringify(BuildProject.STORYBOOK)
  }));

  return config;
}
