var express = require("express");
var router = express.Router();
var code = null;

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

router.get("/", function(req, res, next) {
    code = parseQuery(req.url.slice(1, req.url.length));
    console.log(code)
    if (code.fetch !== undefined) {
        res.send(code.code)
    } else {
        res.send("Authorized.");
    }
});

module.exports = router;