var util = require('mis-util');
var config = require('./config.ignore');

var options = {
   sysname: config.system,
   webname: config.web,
   connect: {
      host: config.host,
      user: config.name,
      password: config.user
   },
   cron: {
      user: config.cronname,
      pass: config.cron
   },
   parm_path: {
      local: './build/'
   },
   usc_path: {
      local: './'
   }
};

var mis = util(options);

//deploy everything to the server
mis.deploy.usc()
.then(function(scripts) { //install the compiler script
   return mis.script.installcompile()
   .then(function() { //compile everything but the include files
      return mis.script.compile(
         scripts.filter(function(script) { return script.indexOf('inc_') < 0 }));
   })
   .then(mis.script.uninstallcompile); //remove the compiler script
});
