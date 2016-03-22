var path = require("path");

module.exports = {
	entry: {
		'electron': "./src/electron",
		'auto-updater': "./src/auto-updater"
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: '[name].js',
		library: ['electronic', '[name]'],
		libraryTarget: "umd"
	},
	module: {
		loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
  	}]
	}
}
