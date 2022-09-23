import { Configuration as DevServerConfiguraion } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguraion {

  return {
    port,
    open               : false,
    historyApiFallback : true
  }
}
