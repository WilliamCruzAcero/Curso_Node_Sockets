

const socketController = (socket) => {
    
    console.log('Cliente conectado ', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    socket.on('send-mesage', ( payLoad, callback ) => {

        const id = 123456789;
        callback( id );

        socket.broadcast.emit( 'send-mesage', payLoad )
    })
}

module.exports = {
    socketController
}