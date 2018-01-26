const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // dodajemy plugin

const config = {
    entry:'./src/index.js', // punkt startu // jedna z dwoch rzeczy nie zbednych do uruchomienia webpacka
    output: { // drugi wazny punkt czyli output
        path: path.resolve(__dirname, 'build') , // to jest sciezka absolutna dlatego uzywamy path z node.js, 'build' to folder
        filename: 'bundle.js',
        publicPath: "build/" // to odnosi sie do sciezki jak np bundlujemy obrazy bo inaczej obrazy sie zle odnosza
    },
    module: { // w wersji webpack 1 byl loader
        rules: [ // tutaj dajemy reguly loaderow
            {
                use: 'babel-loader', // uzyj loaderu
                test: /\.js$/, //to regularne wyrażanie sprawia ze patrzymy na rozszerzenia .js
            },
            {
                //use: ['style-loader', 'css-loader'], //tu wazna jest kolejnosc od prawej do lewej (najpierw css-loader a jego output trafi do style-loader)
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'

                }) ,
                test: /\.css$/ // uwzgledniamy wszystkie pliki css
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/, // znak zapytania okresla czy to jpeg czy jeszcze jakies litery // tu wybieramy typ obrazu
                use:[//tak samo jak ze stylami od prawej do lewej
                    // 'url-loader',
                    {
                        loader: 'url-loader',
                        options: {
                            limit:40000 // ustawienia loaderu tu mamy wielkosc obrazka na 40000b inczej bedzie on w osobnym pliku
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css') // wszystko co loader css zlapie (on wyzej) to wyciagnie tym pluginem (jak bedzie wiele plikow to beda w ten jeden polaczone
    ]
};

module.exports = config;