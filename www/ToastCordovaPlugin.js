var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ToastCordovaPlugin', 'coolMethod', [arg0]);
};
