/*
 * GET home page.
 */

//exports.index = function (req, res) {
//    var items = [];
//    for (var i = 0; i < 5; i++) {
        
//        items.push({ nick: 'sekbote' + i, date: new Date(), args: ['zero', 'one'] });
//    }
//    res.render('index', {
//        channel: 'Express'
//        , buffer: items
//    });
//};


exports.index = function (req, res) {
    //var footer = 'Node';
    var items1 = [];
    for (var i = 0; i < 5; i++) {
        items1.push({ name: 'santosh', value: 'learning node js' });
   }
    res.render('index', { channel: 'Express!', buffer: items1,footer:'Node JS is fun' });
};