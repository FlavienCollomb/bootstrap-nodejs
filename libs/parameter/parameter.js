var Parameter=(function(){
    var _parameter = rekuire("constant");

    return{
        /**
         * @param {string} path
         */
        set:function(path){
            _parameter = require(path);
        },
        /**
         * @param {Array} key
         */
        get:function(key){
            var tmp = _parameter;
            for(var i=0;i<key.length;i++)
                tmp = tmp[key[i]];
            return tmp;
        }
    }
}());
exports.Parameter = Parameter;