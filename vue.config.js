"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");

function resolve(dir) {
    return path.join(__dirname, dir);
}

const name = defaultSettings.title || "vue Docs"; // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 8080; // dev port

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: process.env.NODE_ENV === "development",
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: {
        //     "/api": {
        //         target: "http://localhost",
        //         ws: false,
        //         changeOrigin: true
        //     },
        // }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        // resolve: {
        //     alias: {
        //         "@": resolve("src")
        //     }
        // }
    },
}