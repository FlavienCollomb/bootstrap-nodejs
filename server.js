global.rekuire = require('rekuire');

var http    = require('http');
var url     = require('url');

var servicer    = rekuire('servicer');

var server = http.createServer(function(request, response) {
    var page = url.parse(request.url).pathname;
    response.writeHead(200, {"Access-Control-Allow-Origin" : "*"});
    if(request.method == 'POST')
        servicer.Servicer.get("misc").processPost({
            "request"   :request,
            "response"  :response,
            "callback"  :function(json){
                servicer.Servicer.get("router").get({
                        "id"        :page,
                        "response"  :json.response,
                        "post"      :json.post
                });
            }
        });
    else
        servicer.Servicer.get("router").get({
            "id"        :page,
            "response"  :response
        });
});
server.listen(8080);
