# personal_portfolio
// installations:
// mkdir src and dist
touch .gitignore if not already present
// 1. npm init 
// 2. npm install webpack webpack-cli --save-dev
// 3. created a webpack.config.js with the following content: 
// const path = require('path');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };
// 4. npm install --save-dev html-webpack-plugin 
// made the following changes to the webpack.config.js:
//const HtmlWebpackPlugin = require('html-webpack-plugin');
// plugins: [
//     new HtmlWebpackPlugin({
//         template: 'src/index.html',
//         filename: 'index.html',
//         inject: 'body',
//     })
//   ],
// 5. npm install --save-dev style-loader css-loader
// following changes in webpack.config.js for CSS loading and images loading:
// module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
// 6. added build and watch scripts in package.json:
// "scripts": {
//     "build": "webpack",
//     "watch": "webpack --watch",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
7. run: npm install --save-dev babel-loader @babel/core @babel/preset-env
8. update webpack.config.js to use babel-loader by adding 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
9. create babel.config.json file and add:
{
  "presets": ["@babel/preset-env"]
}

Few tips:
1. your index.html in dist should have the script tag
 <script src="../dist/main.js"></script> of the js script in the dist folder. 
2. import the css file inside index.js in the src folder and webpack will process it and apply the styles to the html document. 