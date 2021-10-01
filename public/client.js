var socket = io(); //"http://127.0.0.1:5000/"

socket.on('connect', () => {
	console.log('connect from server!');
});
