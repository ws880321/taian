var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var optimize = webpack.optimize
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var srcDir = path.resolve(process.cwd(), 'src');
//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};

    dirs.forEach(function(item) {
        matchs = item.match(/(.+)\.js$/);

        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    files.lib=["jquery", "layer",'pagination','echarts','laydate']
    return files;
}
module.exports = {
    cache: true,
    // devtool: "source-map",
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js"
    },
    resolve: {
        alias: {
            layer: srcDir + "/js/lib/layer/layer.js",
            laydate: srcDir + "/js/lib/laydate/laydate.dev.js",
            validform: srcDir + "/js/lib/Validform/validform.js",
            pagination: srcDir + "/js/lib/pagination/pagination.js",
            select2: srcDir + "/js/lib/select2/select2.full.min.js",
            handlebars: srcDir + "/js/lib/handlebars/handlebars-v4.0.5.js",
            engine: srcDir + "/js/common/echarts-engine.js",
        }
    },
    
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"

        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new optimize.CommonsChunkPlugin('common.js'),
        new optimize.CommonsChunkPlugin({
             name: ["common","lib"],
            // 必须最先加载
            // filename:"chunk.js"//忽略则以name为输出文件的名字，
            //     否则以此为输出文件名字
            minChunks: 5
        })
    ]
};
