const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moment = require('moment');
const packageJSON = require('./package.json');

const createBanner = () => {
  const createdTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const year = moment().format('YYYY');
  const banner = `
 ${packageJSON.name}-${packageJSON.version}.js
 Date : ${createdTime}
`;

  return banner;
};

module.exports = (env, argv) => {
  const suffix = argv.mode === 'development' ? 'dev' : 'min';
  const devtool = argv.mode === 'development' ? 'inline-source-map' : false;

  return (
    {
      devtool,
      entry: {
        app: './src/index',
      },
      output: {
        path: path.join(__dirname, '/dist'),
        filename: `${packageJSON.name}-${packageJSON.version}.${suffix}.js`,
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
        ],
      },
      devServer: {
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        before: (app, server) => {
          app.get('/beatles', (req, res) => {
            const apiVal = [
              {
                name: 'john',
                instrument: 'rhythm guitar',
              },
              {
                name: 'paul',
                instrument: 'bass',
              },
              {
                name: 'george',
                instrument: 'lead guitar',
              },
              {
                name: 'ringo',
                instrument: 'drums',
              },
            ];
            setTimeout(() => {
              res.json(apiVal);
            }, 500);
          });

          app.get('/stones', (req, res) => {
            const apiVal = [
              {
                name: 'mick',
                instrument: 'vocal',
              },
              {
                name: 'keith',
                instrument: 'rhythm guitar',
              },
              {
                name: 'brian',
                instrument: 'piano',
              },
              {
                name: 'ronnie',
                instrument: 'guitar',
              },
              {
                name: 'charlie',
                instrument: 'drum',
              },
            ];
            setTimeout(() => {
              res.json(apiVal);
            }, 500);
          });
        },
      },
      plugins: [
        new webpack.BannerPlugin({
          banner: createBanner(),
        }),
        new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, './dist/index.html'),
          template: './src/template/index.html',
        }),
      ],
      resolve: {
        extensions: ['.js'],
      },
    }
  );
};
