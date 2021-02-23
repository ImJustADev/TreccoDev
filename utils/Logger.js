class Logger {
    constructor(msg) {
        var time = new Date().toLocaleTimeString();
        console.log("[ " + time + " ] " + msg);
    }
}

module.exports = Logger;