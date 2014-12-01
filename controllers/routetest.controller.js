var mysql   = require('mysql');

var servicer    = rekuire('servicer.js');

var RouteTest=(function(){
    return{
        /**
         * @param {Object} json
         *      @param  json.response
         *      @param  json.post
         */
        first:function(json){
            var db = servicer.Servicer.get("db").get("test");
            db.query('SELECT * FROM test', null, { raw: true }).success(function(rows) {
                json.response.end(JSON.stringify(rows));
            });
        },
        second:function(json){
            var db = servicer.Servicer.get("db").get("test");
            db.query('SELECT * FROM test WHERE id =:id', null, { raw: true }, json.post).success(function(rows) {
                json.response.end(JSON.stringify(rows));
            });
        },
        third:function(json){
            servicer.Servicer.get("logger").log("TEST",3);
            json.response.end();
        },
        fourth:function(json){
            servicer.Servicer.get("mailer").send({
                "from"      :"test@email.net",
                "to"        :"test@email.net",
                "subject"   :"Subject test",
                "text"      :"Text test"
            },"gmail");
            json.response.end();
        }
    }
}());
exports.RouteTest = RouteTest;