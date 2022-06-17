const path = require("path");
const { NexePlugin } = require("nexe-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.join(__dirname, "build", "js"),
	},
	mode: "production",
	target: "node",
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			},
		],
	},
	externals: {
		"osx-temperature-sensor": "commonjs2 osx-temperature-sensor",
	},
	plugins: [
		new NexePlugin([
			{
				targets: "win-x64-12.18.2",
				output: path.join("..", "bin", "client-win-x64"),
			}
		])
	]
}