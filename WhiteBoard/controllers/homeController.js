﻿(function (homeController) {
    homeController.init = function (app) {
        app.get("/", function (req, res) {
            res.render("home", {title:"Express+ Home Controller + vash"});
        })
    };
})(module.exports);