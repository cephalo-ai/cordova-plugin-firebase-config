var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseConfig";

function promiseParameter(type, key, namespace) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "get" + type, [key, namespace || ""]);
    });
}

module.exports = {
    activate: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, 'activate', []);
        });
    },
    fetch: function(ttlSeconds) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "fetch", [ttlSeconds || 0]);
        });
    },
    getBoolean: function(key, namespace) {
        return promiseParameter("Boolean", key, namespace);
    },
    getString: function(key, namespace) {
        return promiseParameter("String", key, namespace);
    },
    getNumber: function(key, namespace) {
        return promiseParameter("Number", key, namespace);
    },
    getBytes: function(key, namespace) {
        return promiseParameter("Bytes", key, namespace);
    }
};
