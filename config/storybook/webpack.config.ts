import path from 'path';
import { BuildPaths } from '../build/types/config';
import { Configuration, RuleSetRule } from 'webpack';
import { buildSvgLoader, buildCssLoaders } from '../build/loaders';



export default ({ config }: { config: Configuration}) => {
  const paths: BuildPaths = {
    build : '',
    html  : '',
    entry : '',
    src   : path.resolve(__dirname, '..', '..', 'src')
  };

  config.resolve?.modules?.push(paths.src);
  // config.resolve.extensions.push('.ts', '.tsx');
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule;
  })

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoaders(true));
  return config;
}
