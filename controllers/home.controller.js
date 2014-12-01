var fs = require('fs');

var HomeController=(function(){
    return{
        /**
         * @param {Object} json
         *      @param {} json.response
         */
        set:function(json){
            fs.readFile('./index.html', function (err, html) {
                if (err) throw err;
                json.response.write(html);
                json.response.end();
            });
        }
    }
}());
exports.HomeController = HomeController;