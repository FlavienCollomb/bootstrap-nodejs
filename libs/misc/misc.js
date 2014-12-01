var http        = require('http');

var Misc=(function(){
    return{
        /**
         * @param {Object} json
         *      @param {} json.request
         *      @param {} json.response
         *      @param {Function} json.callback
         */
        processPost:function(json) {
            var post = "";
            if(typeof json.callback !== 'function') return null;

            json.request.on('data', function(data) {
                post += data;
                if(post.length > 1e6) {
                    post = "";
                    json.response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                    json.request.connection.destroy();
                }
            });

            json.request.on('end', function(){
                json.callback({
                    "response"  :json.response,
                    "post"      :JSON.parse(post)
                });
            });
        }
    }
}());
exports.Misc = Misc;