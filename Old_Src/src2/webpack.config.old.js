const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // dodajemy plugin

const config = {
    entry:'./src/index.js', // punkt startu // jedna z dwoch rzeczy nie zbednych do uruchomienia webpacka
    output: { // drugi wazny punkt czyli output
        path: path.resolve(__dirname, 'build') , // to jest sciezka absolutna dlatego uzywamy path z node.js, 'build' to folder
        filename: 'bundle.js'
    },
    module: { // w wersji webpack 1 byl loader
        rules: [ // tutaj dajemy reguly loaderow
            {
                use: 'babel-loader', // uzyj loaderu
                test: /\.js$/, //to regularne wyrażanie sprawia ze patrzymy na rozszerzenia .js
            },
            {
                use: ['style-loader', 'css-loader'], //tu wazna jest kolejnosc od prawej do lewej (najpierw css-loader a jego output trafi do style-loader)
                test: /\.css$/ // uwzgledniamy wszystkie pliki css
            }
        ]
    }
};

module.exports = config;