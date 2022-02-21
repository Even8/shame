
let path = require('path')
const resolve = (...p) => require('path').resolve(__dirname, ...p)
let HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
module.exports = {
	mode: 'none',
	// entry:['./src/ts/a.js'],
	entry: {
		a: './src/ts/a.ts',
		b: './src/ts/b.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: resolve('./tsconfig.json'),
					onlyCompileBundledFiles: false,
				}
			},
			{
				test: /\.(less|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// publicPath: './css'
							// 这里可以指定一个 publicPath
							// 默认使用 webpackOptions.output中的publicPath
							// outputPath: '../../../styles'
						},
					},
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
								// modifyVars: theme,
							},
							// limit: 10000,
							// name: 'css/[name].[hash:7].[ext]',
						}
					}
				],
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				// include: [resolve('./assets')],
				use: [
					{
						loader: 'url-loader',
						// limit: 8 * 1024,
						// esModule: false 
					},
				]
			},
			// {
			// 	test: /\.html$/,
			// 	use: ['file-loader?name=[path][name].[ext]!extract-loader!html-loader']
			// }
			// {
			// 	test:/\.html$/,
			// 	// test: /\.html$/i,
			// 	use:[
			// 			{
			// 					loader:"html-loader",
			// 					options:{
			// 							attrs:["img:src"]  //此处的参数值  img是指html中的 <img/> 标签， src是指 img的src属性   表示 html-loader 作用于 img标签中的 src的属性
			// 					}
			// 			}
			// 	]
			// }	
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack10',
			template: 'index.html'	
		}),
		new MiniCssExtractPlugin({
			filename: './css/base.css',
			chunkFilename: '[id].css',
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin({
      patterns: [
				{	
					from: path.join(__dirname, './src/images'),  
					to: path.join(__dirname, './dist/images'), 
				},
      ],
    }),
	],
	optimization: {
    splitChunks: {
      chunks: 'initial',
			name: 'common',	
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  },
}