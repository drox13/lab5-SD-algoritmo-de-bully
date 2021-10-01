var socket = io(); //"http://127.0.0.1:5000/"

var tableBodyElement = document.getElementById('table-body');


socket.on('connect', () => {
	console.log('connect from server!');
});



socket.on('newInstance', (info)=>{
	let cell = '<tr><th scope="row">' + 1 + '</th><td>' + info.ip + '</td><td>' + info.port + '</td><td>' + '5000' + '</td></tr>';
	let row = document.createElement('TR');
	row.innerHTML = cell;
	tableBodyElement.appendChild(row);
	
});