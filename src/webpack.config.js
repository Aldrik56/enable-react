module.exports = {
    // ... other Webpack configurations
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Injects CSS into the DOM
            'css-loader',   // Interprets CSS
            'sass-loader'   // Compiles SCSS to CSS
          ]
        }
      ]
    }
  };