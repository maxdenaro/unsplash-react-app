const path = require('path');

module.exports = {

	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'build')
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	}

}