const path = require('path');

const config = {
    entry:'./src/index.js', // punkt startu // jedna z dwoch rzeczy nie zbednych do uruchomienia webpacka
    output: { // drugi wazny punkt czyli output
        path: path.resolve(__dirname, 'build') , // to jest sciezka absolutna dlatego uzywamy path z node.js, 'build' to folder
        filename: 'bundle.js'
    }
};

module.exports = config;