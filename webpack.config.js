const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [
		new HTMLPlugin({
			template: 'dist/index.html',
		}),
	  new MiniCssExtractPlugin({
		filename: 'style.css',
	  }),
	],
	module: {
	  rules: [
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
			  {
				loader: MiniCssExtractPlugin.loader,
				options: {
				publicPath: 'dist/',
				  hmr: process.env.NODE_ENV === 'development',
				},
			  },
			  'css-loader',
			  'postcss-loader',
			  'sass-loader',
			],
		},
	  ],
	},
  };