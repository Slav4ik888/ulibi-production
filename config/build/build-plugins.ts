import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      // chunkFilename:
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
}
