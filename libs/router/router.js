var path    = require('path');
var url     = require('url');
var fs      = require('fs');

var home    = rekuire('home.controller');
var test    = rekuire('routetest.controller');

var Router=(function(){
    var _mime = {
        '.js': 'text/javascript',
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg'  : 'image/jpeg',
        '.jpeg' : 'image/jpeg',
        '.png'  : 'image/png'
    };

    var _route ={
        "/"         : home.HomeController.set,
        "/first"    : test.RouteTest.first,
        "/second"   : test.RouteTest.second,
        "/third"    : test.RouteTest.third,
        "/fourth"   : test.RouteTest.fourth
    };

    /**
     * @param {Object} json
     *      @param {} json.response
     *      @param {} json.id
     */
    var other = function(json){
        var file    = '.' + json.id;
        var ext     = path.extname(file);

        if(_mime[ext]!=undefined){
            fs.readFile('./' + file, function (err, data) {
                if (err) throw err;
                json.response.writeHead(200,{"Content-Type":_mime[ext]});
                json.response.end(data);
            });
        }
        else
            json.response.end();
    };

    return{
        /**
         * @param {Object} json
         */
        get:function(json){
            if(_route[json.id]!=undefined){
                var route = _route[json.id];
                route(json);
            }
            else
                other(json);
        }
    }
}());
exports.Router = Router;
