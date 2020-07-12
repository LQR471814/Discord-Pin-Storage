var express = require("express");
var router = express.Router();
var code = undefined;

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
    var queryParams = parseQuery(req.url.slice(1, req.url.length));
    console.log(queryParams)
    if (queryParams.code !== undefined) {
        code = queryParams.code;
        console.log(code)
        res.send("Authorized, this page will automatically close.");
    } else if (queryParams.fetch !== undefined) {
        res.send({code: code});
    } else {
        res.send("404 - This isn't the site you're looking for.");
    }
});

module.exports = router;