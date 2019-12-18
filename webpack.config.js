const dev = process.env.NODE_ENV === 'development'
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin")

let cssLoaders = [
	{loader: 'css-loader', options: {importLoaders: 1}}
]

if (!dev) {
	cssLoaders.push({
		loader: 'postcss-loader',
		options: {
			plugins: (loader) => [
				require('autoprefixer')({
					browers: ['last 2 versions', 'ie > 8']
				})
			]
		}
	})
}

let config = {
	entry: {
		app: ['./src/style/style.sass', './src/index.js']
	},
	output: {
		path: path.resolve('./public'),
		filename: dev ? '[name].js' : '[name].[chunkhash:4].js',
		publicPath: '/public/'
	},
	module: {
	  rules: [
		{
			test: /\.css$/,
			use: cssLoaders
		},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
			  {
				loader: MiniCssExtractPlugin.loader,
				options: {
				publicPath: 'public/assets/css/',
				  hmr: process.env.NODE_ENV === 'development',
				},
			  },
			  ...cssLoaders, 'sass-loader'
			],
		},
	  ],
	},
	plugins: [
		new MiniCssExtractPlugin({
		  filename: dev ? '[name].css' : '[name].[contenthash:4].css',
		  chunkFilename: '[id].css',
		  disable: dev,
		}),
		new DashboardPlugin(),
		new CleanWebpackPlugin({
			verbose: true
		})
	  ]
}

  if (!dev) {
	config.plugins.push(new ManifestPlugin())
	console.log('Version de production')
}

module.exports = config