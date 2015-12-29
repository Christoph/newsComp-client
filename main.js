// Socket initialization

// Connect to server
var socket = io.connect('http://localhost:8000',{
        reconnection: true,
        });

// Status events
socket.on('connect', function() {
    console.log("Connected");
});

socket.on('disconnect', function() {
    console.log("Disconnected");
});
