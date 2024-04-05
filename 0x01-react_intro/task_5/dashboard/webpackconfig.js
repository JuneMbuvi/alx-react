const path = require('path');

module.exports = {
        entry: './src/index.js',
        output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'bundle.js',
        },
        devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
                hot: true,
		open: false,
        },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	devtool: 'inline-source-map',
};
