const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@atom', path.resolve(__dirname, 'src/components/atoms'))
            .set('@molecules', path.resolve(__dirname, 'src/components/molecules'))
            .set('@organisms', path.resolve(__dirname, 'src/components/organisms'))
            .set('@assets', path.resolve(__dirname, 'src/assets'))
            .set('@services', path.resolve(__dirname, 'src/services'));
    },
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: [
                        path.resolve(__dirname, 'src/core/')
                    ],
                    indentedSyntax: true,
                },
                prependData: '@import "~@/assets/sass/core"',
            },
        }
    }
}