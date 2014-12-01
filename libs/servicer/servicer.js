var parameter   = rekuire('parameter');
var router      = rekuire('router');
var misc        = rekuire('misc');
var db          = rekuire('db');
var mailer      = rekuire('mailer');
var logger      = rekuire('logger');

var Servicer=(function(){
    var _service ={
        "parameter"     : parameter.Parameter,
        "misc"          : misc.Misc,
        "router"        : router.Router,
        "db"            : db.Db,
        "mailer"        : mailer.Mailer,
        "logger"        : logger.Logger
    };

    return{
        /**
         * @param {string} name
         */
        get:function(name){
            if(_service[name] != undefined)
                return _service[name];
            else
                return undefined;
        }
    }
}());
exports.Servicer = Servicer;