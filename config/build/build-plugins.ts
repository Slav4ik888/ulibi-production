import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';


export function buildPlugins({ paths, isDev, isAnal, apiUrl, project }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      // chunkFilename:
    }),
    new DefinePlugin({
      __IS_DEV__  : JSON.stringify(isDev),
      __API_URL__ : JSON.stringify(apiUrl),
      __PROJECT__ : JSON.stringify(project)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.locales, to: paths.buildLocales
        }
      ]
    })
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new HotModuleReplacementPlugin());
  }

  if (isAnal) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
  }

  return plugins
}
