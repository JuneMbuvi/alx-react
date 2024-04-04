const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ClenWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js'
	},
	performance: {
		maxAssetSize: 1000000,
		hints: false,
		maxEntrypointSize: 1000000,
	},
	plugins: [ new CleanWebpackPlugin(), newHtmlWebpackPlugin() ],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		contentBase: path.join(__dirname, './public'),
		compress: true,
		port: 8564,
	}
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					"file-loader",
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
};
