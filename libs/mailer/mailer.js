var nodemailer      = require('nodemailer');
var smtpTransport   = require('nodemailer-smtp-transport');

var servicer        = rekuire('servicer.js');

var Mailer=(function(){
    return{
        /**
         * @param type
         * @returns {*}
         */
        get:function(type){
            if(type == undefined || type == "smtp"){
                var smtp = servicer.Servicer.get("parameter").get(["email","smtp"]);
                return nodemailer.createTransport(smtpTransport(smtp));
            }
            if(type == "gmail"){
                var gmail = servicer.Servicer.get("parameter").get(["email","gmail"]);
                return nodemailer.createTransport({
                    service: 'gmail',
                    auth: gmail
                });
            }
        },
        /**
         * @param {Object} json
         *      @param {string} json.from
         *      @param {string} json.to
         *      @param {string} json.subject
         *      @param {string} json.text
         *      @param {string} type
         *      @param {Function} callback
         */
        send:function(json,type,callback){
            var transport = this.get(type);

            var force = servicer.Servicer.get("parameter").get(["email","force"]);
            if(force != undefined){
                json["subject"] = force["prefix"] + " " + json["subject"] + " (real send was : " + json["to"] + ")";
                json["to"]      = force["to"];
            }
            transport.sendMail(json,callback);
        }
    }
}());
exports.Mailer = Mailer;