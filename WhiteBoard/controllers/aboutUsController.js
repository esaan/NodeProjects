(function (aboutUsController) {
    aboutUsController.init = function (app) {
        app.get("/", function (req, res) {
            res.render("aboutus", { title: "Express+ about us + vash" });
        })
    };
})(module.exports);