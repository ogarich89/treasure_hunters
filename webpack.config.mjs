import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';
const isEnvLocalFileExist = existsSync('.env.local');

if (isDevelopment) {
  const dotenv = await import('dotenv');
  dotenv.config(isEnvLocalFileExist ? { path: '.env.local' } : undefined);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const { API_URL, ENVIRONMENT = 'production' } = process.env;

export default {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    allowedHosts: 'all',
    proxy: [
      {
        context: '/api',
        target: API_URL,
        secure: false,
        changeOrigin: true,
      },
    ],
    historyApiFallback: true,
    compress: false,
    port: 3000,
    client: {
      webSocketURL: 'ws://localhost:3000/ws',
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  context: resolve(__dirname, 'src'),
  entry: {
    main: './main.ts',
  },
  output: {
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: isDevelopment ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDevelopment
      ? 'js/[name].js'
      : 'js/[name].[contenthash].js',
    assetModuleFilename: isDevelopment
      ? 'assets/[name].[ext]'
      : 'assets/[name].[hash:8].[ext]',
    clean: true,
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : false,
  stats: {
    assets: true,
    modules: false,
    hash: false,
    children: false,
    warnings: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      src: resolve(__dirname, './src'),
      config: resolve(__dirname, './config'),
    },
  },
  ...(isDevelopment ? { performance: false } : {}),
  optimization: {
    ...(isDevelopment ? { runtimeChunk: 'single' } : {}),
    minimize: !isDevelopment,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        terserOptions: {
          compress: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: !isDevelopment
      ? {
          cacheGroups: {
            vendors: {
              priority: -10,
              reuseExistingChunk: true,
            },
            common: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
          chunks: 'all',
          maxInitialRequests: 30,
          maxAsyncRequests: 30,
          maxSize: 250000,
        }
      : false,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'static', to: '' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
    new Dotenv({
      systemvars: true,
      path: isDevelopment
        ? isEnvLocalFileExist
          ? '.env.local'
          : '.env'
        : `.env.${ENVIRONMENT}`,
      defaults: isDevelopment && isEnvLocalFileExist ? '.env' : false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: {
          sourceMap: isDevelopment,
          jsc: {
            parser: {
              syntax: 'typescript',
              dynamicImport: true,
            },
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
