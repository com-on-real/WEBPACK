const dev = process.env.NODE_ENV === 'development'
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin")

console.log('Webpack : Sass - Autoprefixer - Compress Img - No cache files')
console.log('Initialisation...')
console.log('Veuillez patienter...')
console.log('')

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
		app: ['./src/style/style.sass', './src/js/index.js']
	},
	output: {
		path: path.resolve('./public'),
		filename: dev ? '[name].js' : '[name].[chunkhash:4].js',
		publicPath: '/public/'
	},
	resolve: {
		alias: {
			'@css': path.resolve('./src/style/'),
			'@js': path.resolve('./src/js/'),
			'@img': path.resolve('./src/img/'),
		}
	},
	module: {
	  rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
				  presets: ['@babel/preset-env']
				}
			  }
		},
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
				publicPath: '',
				  hmr: process.env.NODE_ENV === 'development',
				},
			  },
			  ...cssLoaders, 'sass-loader'
			],
		},
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'file-loader'
		},
		{
			test: /\.(png|jpg|gif|svg)$/, //test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
			use: [
			  {
				loader: 'url-loader',
				options: {
				  limit: 8192,
				  name: '[name].[hash:4].[ext]'
				},
			  },
			  {
				loader: 'image-webpack-loader',
			  }
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
		}),
		new ManifestPlugin()
	  ]
}

  if (!dev) {
	// config.plugins.push(new ManifestPlugin())
	console.log('Build Production')
} else
	console.log('Development Mode')

module.exports = config