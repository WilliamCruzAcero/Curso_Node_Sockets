
// referencias del html
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMesage  = document.querySelector('#txtMesage');
const btnSend  = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('send-mesage', ( payLoad ) => {
    console.log( payLoad )
})

btnSend.addEventListener('click', () => {
    
    const mesage = txtMesage.value;
    const payLoad = {
        mesage,
        id: '123456',
        fecha: new Date().getTime()
    }

    socket.emit( 'send-mesage', payLoad,  ( id ) => {
        console.log('Desde el server: ', id );
    });
})