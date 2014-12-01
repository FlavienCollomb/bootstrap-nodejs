# [NodeJS Bootstrap]

NodeJS Bootstrap is a sample project to begin easily a first NodeJS project with Routes, Multi-database connection, logs and mails.

## Modules
- bunyan for Logger service
- sequelize (with node-mysql) for Db service
- nodemailer (with nodemailer-smtp-transport) for Mailer service
- rekuire for easy require

## Router

To add a route add a key in "_route" JSON in /libs/router/router.js with your action method

## Config

To configure your project, modify /config/constant.json

### Config DB

Add a key for each Database configuration like
```javascript
"test":{
    "host"        :"localhost",
    "port"        :8889,
    "username"    :"root",
    "password"    :"root",
    "database"    :"test"
}
```

### Config email

Add a key for each transport type like
```javascript
"smtp":{
    "smtp"  :"smt.example.net",
    "port"  :587
},
"gmail":{
    "user"  :"your.gmail.id",
    "pass"  :"your.gmail.password"
}
```

Add a "error" key to configure email used to send a log error level 4 like
```javascript
"error":{
    "from"      :"youremail@gmail.com",
    "to"        :"youremail@gmail.com",
    "subject"   :"ERR|",
    "type"      :"gmail"
}
```

If you add a "force" key, all emails will be send to the configured email like
```javascript
"force":{
    "to":"youremail@gmail.com",
    "prefix":"TEST|"
}
```

## First steps
Use DB service
```javascript
var servicer    = rekuire('servicer.js');
var db = servicer.Servicer.get("db").get("test");
```

Use Logger service
```javascript
var servicer    = rekuire('servicer.js');
/**
* Level 1 : info
* Level 2 : warn
* Level 3 : error
* Level 4 : error + email
*/
servicer.Servicer.get("logger").log("TEST",3);
```

Use Mailer service
```javascript
var servicer    = rekuire('servicer.js');
servicer.Servicer.get("mailer").send({
    "from"      :"test@email.net",
    "to"        :"test@email.net",
    "subject"   :"Subject test",
    "text"      :"Text test"
},"gmail");
```

## Creators
**Flavien Collomb**

- <https://twitter.com/FlavienCollomb>
- <https://github.com/FlavienCollomb>

## Copyright and license
Code copyright 2014 Flavien Collomb. Code released under [the MIT license](LICENSE).
