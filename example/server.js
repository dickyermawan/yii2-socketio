/*
 * @Author: Dicky Ermawan S., S.T., MTA 
 * @Email: wanasaja@gmail.com 
 * @Web: dickyermawan.github.io 
 * @Linkedin: linkedin.com/in/dickyermawan 
 * @Date: 2019-07-28 13:56:36 
 * @Last Modified by: Dicky Ermawan S., S.T., MTA
 * @Last Modified time: 2019-07-28 17:39:20
 */

var server     = require('http').createServer(),
    io         = require('socket.io')(server),
    logger     = require('winston'),
    port       = 8089;

// Logger config
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true, timestamp: true });
logger.info('SocketIO > listening on port ' + port);

// set up initialization and authorization method
// io.use(function (socket, next) {
//     var auth = socket.request.headers.authorization;
//     if(auth){
//         const token = auth.replace("Bearer ", "");
//         logger.info("auth token", token);
//         // do some security check with token
//         // ...

//         return next();
//     }
//     else{
//         return next(new Error("no authorization header"));
//     }
// });

io.on('connection', function (socket){
    var nb = 0;

    logger.info('SocketIO > Connected socket ' + socket.id);
    logger.info("X-My-Header", socket.handshake.headers['x-my-header']);

    // socket.on('broadcast', function (message) {
    //     ++nb;
    //     logger.info('ElephantIO broadcast > ' + JSON.stringify(message));
    //     io.emit('site_index');
    // });
    socket.on('realTime', function (message) {
        ++nb;
        io.emit(message['to'], message);
    });

    socket.on('disconnect', function () {
        logger.info('SocketIO : Received ' + nb + ' messages');
        logger.info('SocketIO > Disconnected socket ' + socket.id);
    });
});

server.listen(port);