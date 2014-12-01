var bunyan      = require('bunyan');

var servicer    = rekuire('servicer.js');

var Logger=(function(){
    var _log;

    return{
        get:function(){
            if(_log == undefined)
                _log = bunyan.createLogger(servicer.Servicer.get("parameter").get(["log"]));
            return _log;
        },
        /**
         * @param {string} msg
         */
        log:function(msg,level){
            this.get();
            switch(level){
                case 1:
                    _log.info(msg);
                    break;
                case 2:
                    _log.warn(msg);
                    break;
                case 3:
                    _log.error(msg);
                    break;
                case 4:
                    _log.error(msg);
                    var error = servicer.Servicer.get("parameter").get(["email","error"]);
                    error["subject"]=msg;
                    servicer.Servicer.get("mailer").send(error,error["type"]);
                    break;
            }
        }
    }
}());
exports.Logger = Logger;