const app = require('express')(); //dependency for node
const server = require('http').Server(app); //declares a http server
const io = require('socket.io')(server); //server.io dependencies
const port = 4242; //port number for server to use
//these constants allowed me to have the css in a seperate file as when i tried it couldn't find the css file.
const path = require('path');
const express = require('express');
var guest = 0;
var user = "";

//listen for the server running on the correct port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//this is the line that allows the css file to be found
app.use(express.static(path.join(__dirname, 'public')));

//gets all the html pages that will be used
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

app.get('/Overwatch', (req, res) => {
  res.sendFile(__dirname + '/public/html/overwatch.html');
});
app.get('/WorldofTanks', (req, res) => {
  res.sendFile(__dirname + '/public/html/worldoftanks.html');
});
app.get('/Fortnite', (req, res) => {
  res.sendFile(__dirname + '/public/html/fortnite.html');
});

//Games namespace, could have multiple namespaces so you could have different sets of rooms for different topics
const GAMES = io.of('/games');

//connects to the room that was selected using the room constant from the html page that the user selected
GAMES.on('connection', (socket) => {
  socket.on('join', (data) => {
    guest++
    socket.join(data.room);
    user = " Guest" + guest;
    GAMES.in(data.room).emit('message', `${user} joined ${data.room} room`);
    GAMES.in(data.room).emit('user', user);

  });
  //emits the message that was sent to the javscript file
  socket.on('message', (data) => {
    console.log(`message: ${data.msg}`);
    GAMES.in(data.room).emit('message', `${user}: ${data.msg}`);
  });
  //sends a user disconnect message to the console.
  socket.on('disconnect', (data) => {
    console.log('user disconnected');
    //emits a user disconnected message to the javascript file
    GAMES.emit('message', `${user} left the room`);
  });
});
