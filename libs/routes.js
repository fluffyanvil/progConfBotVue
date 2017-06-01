/**
 * Created by admin on 6/1/2017.
 */
var packageInfo = require('./../package.json');
module.exports = function(app) {
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
}