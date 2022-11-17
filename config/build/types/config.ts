
export type BuildMode = 'production' | 'development'
export enum BuildProject {
  STORYBOOK = 'storybook',
  FRONTEND  = 'frontend',
  JEST      = 'jest'
}


export interface BuildPaths {
  entry : string
  build : string
  html  : string
  src   : string
}


export interface BuildEnv {
  mode   : BuildMode
  port   : number
  anal   : boolean
  apiUrl : string
}


export interface BuildOptions {
  mode    : BuildMode
  paths   : BuildPaths
  isDev   : boolean
  isAnal  : boolean
  port    : number
  apiUrl  : string
  project : BuildProject
}
