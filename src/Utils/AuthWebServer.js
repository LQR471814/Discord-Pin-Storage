const express = require('express')
const app = express()

class AuthWebServer {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.code = null;

        app.get('/', this.requestListener)
          
        app.listen(3000)
    }

    parseQuery(queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    requestListener (req, res) {
        this.code = this.parseQuery(req.url).code;
        res.send("Authorized")
    }
}

export default AuthWebServer;