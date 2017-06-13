/**
 * Created by admin on 6/1/2017.
 */
var packageInfo = require('./../package.json');
var multer = require('multer');
var upload = multer();

module.exports = function(app) {
    var color = {};
    color.red = 255;
    color.green = 255;
    color.white = 255;
    color.brightness = 200;
    app.set('view engine', 'pug');
    app.get('/', function (req, res) {
        res.json({version: packageInfo.version});
    });

    app.get('/chats/:chatId', function (req, res) {
        var chatId = parseInt(req.params.chatId);
        res.render('chats', {
            chatId: chatId
        })
    });

    app.get('/color', function (req, res) {
        res.json(color);
    });

    app.post('/color', upload.fields([]), function (req, res){
        var data = req.body.color;
        color = JSON.parse(data);
        res.json(color);
    });
}