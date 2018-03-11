const SOCKET = io('/games');
//when the form is submitted the socket emits the message and the room
$('form').submit(() => {
  let msg = $('#m').val();
  SOCKET.emit('message', {
    msg,
    room
  });
  $('#m').val('');
  return false;
});
//emits the room connected when the user joins the room
SOCKET.on('connect', () => {
  SOCKET.emit('join', {
    room: room
  });
});
//appends the message that was sent into a new list item
SOCKET.on('message', (msg) => {
  $('#messages').append($('<li>').text(msg));
});

SOCKET.on('user',(user) => {
  $('#username').html(user);
});
