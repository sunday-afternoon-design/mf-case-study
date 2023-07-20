const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    base: '/mf-case-study/',
    server: {
        port: 8080
    }
}