const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");



const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};


const PAGES_DIR = `${PATHS.src}/pages`;

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    another: `${PATHS.src}/another`,
    homeWorkPage: `${PATHS.src}/homePage`,
    listPage: `${PATHS.src}/listPage`,
    litPage: `${PATHS.src}/litPage`,
    timetablePage: `${PATHS.src}/tm`
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(png|svg|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/${PATHS.assets}img`,
        to  : `${PATHS.assets}img`
      }
    ]),
    
    
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: `./index.html`,
      excludeChunks: ['another', 'homeWorkPage', 'listPage', 'litPage', 'timetablePage']
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/another.html`,
      filename: `./another.html`,
      excludeChunks: ['app', 'homeWorkPage', 'listPage', 'litPage', 'timetablePage']
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/dz.html`,
      filename: `./dz.html`,
      excludeChunks: ['app', 'another', 'listPage', 'litPage', 'timetablePage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/listPage.html`,
      filename: `./listPage.html`,
      excludeChunks: ['app', 'another', 'homeWorkPage', 'litPage', 'timetablePage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/literature.html`,
      filename: `./literature.html`,
      excludeChunks: ['app', 'another', 'homeWorkPage', 'listPage', 'timetablePage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/timetable.html`,
      filename: `./timetable.html`,
      excludeChunks: ['app', 'another', 'homeWorkPage','litPage', 'listPage'],
    }),
  ]
};
