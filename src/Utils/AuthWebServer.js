const http = require("http");

class AuthWebServer {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.code = null;
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

    start () {
        this.server = http.createServer(requestListener);
        this.server.listen(this.port, this.host, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);
        });

    }

    requestListener (req, res) {
        this.code = parseQuery(url).code;
        res.writeHead(200);
    }
}
