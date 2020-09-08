
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"]
            },
            {
                test:/\.html$/i,
                use:[
                    "html-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: "[name].[ext]",
                      outputPath: "imgs"
                    },
                  },
                ],
            },
        ],
    },
};
