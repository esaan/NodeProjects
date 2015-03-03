var express = require("express")
 , routes = require('./routes')
  , path = require('path')

var app = express();

// Controller Section
var controllers = require("./controllers");
controllers.init(app);
// end of Controller section

//app.set('port', process.env.PORT || 3000); // process.env.PORT get available port to run the site
app.set('port', 3000);
app.set('views', path.join(__dirname, '/views')); // critical to use path.join on windows
app.set('view engine', 'vash');
console.log('node server started..');

//css
app.use(express.static(__dirname + "/public"));
//end of css
//uncomment when there is no controller
    //app.get('/', routes.index); // serves get request
    //app.get('/', routes.index);
//end of router commenting

//if (app.get('env') == 'development') {
//    app.use(errorHandler());
//}
app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});