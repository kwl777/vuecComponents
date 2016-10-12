var webpack=require("webpack");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
	// devtool:"eval-source-map",
	//,__dirname nodeJs常量，执行的根目录，！感叹号使同一文件能够使用不同类型的loader
	entry:{
		index:__dirname+"/app/main.js"
	},
	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract("style-loader","css-loader")
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract("style","css!sass")
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("style.css"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	sass:[
		require('autoprefixer')
	],

}