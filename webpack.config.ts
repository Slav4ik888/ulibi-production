import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildPaths } from './config/build/types/config';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry : path.resolve(__dirname, 'src', 'index.tsx'),
    build : path.resolve(__dirname, 'build'),
    html  : path.resolve(__dirname, 'public', 'index.html'),
    src   : path.resolve(__dirname, 'src')
  };

  const
    mode   = env.mode || 'development',
    isDev  = mode === 'development',
    port   = env.port || 3010,
    isAnal = env.anal,
    apiUrl = env.apiUrl || 'http://localhost:8000';


  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isAnal,
    port,
    apiUrl
  });

  return config;
}
