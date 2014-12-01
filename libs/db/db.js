var mysql   = require('mysql');
var db      = require("sequelize");

var servicer    = rekuire('servicer.js');

var Db=(function(){
    var _db = {};

    return {
        /**
         * @param {string} id
         */
        get:function(id){
            var json = servicer.Servicer.get("parameter").get(["db",id]);
            var mini = JSON.stringify(json);
            if(_db[mini] == undefined)
                _db[mini] = new db(json.database, json.username, json.password, {
                    "host":json.host,
                    "port":json.port
                });
            return _db[mini];
        }
    }
}());
exports.Db = Db;