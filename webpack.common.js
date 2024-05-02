const path = require('path');

module.exports = {
    // Generated code is more readable but may not be performance optimized.
    mode: 'development',
    // The entry point of the application
    entry: './src/js/index.js',
    devtool: 'inline-source-map',
    // Preset: Defines that we want to create an electron application.
    target: 'electron-renderer',
    module: {
        // Defines how the code should be bundled
        rules: [
            {
                test: /\.js$/,
                // We do not need the node_modules, so they are excluded
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env', {
                                targets: {
                                    esmodules: true
                                }
                            }],
                            '@babel/preset-react']
                    }
                }
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['.js'],
    },
    // Define where to compile the code
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build', 'js'),
    },
};