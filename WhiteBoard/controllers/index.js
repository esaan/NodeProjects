(function (controllers) { 
    //Declare all the controllers of the project here
    var homeController = require("./homeController");
    var aboutUsController = require("./aboutUsController");
    //Initialize each controller as follows

    controllers.init = function (app) { 
        homeController.init(app);
    }

    controllers.init = function (app) {
        aboutUsController.init(app);
    }
    //end of controller initialization
})(module.exports);