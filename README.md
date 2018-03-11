#Computer networks CA3
##Node.js server chatroom

This is a chatroom that has 3 rooms. In reality there could be as many rooms as you want. The server will assign a user name that is guest followed by a number. Each time a user joins the number is increased. The user can type in a message which will be sent to the server and displayed on any other instances of that particular chatroom that is open. Every even message bubble is one color and every odd one is a different color. This could be customised so that the users message is one color and everyone else's is a different color. Users get notified when another user enters or leaves the room.

To setup the server you should clone or download this repository. In a browser navigate to https://nodejs.org/en/ and download the LTS version of node. When it has installed open a command line or a node terminal and navigate to the downloaded folder. For ease place the folder on the desktop as this is usually the quickest to navigate to. Once you have navigated to the folder type 'npm run start' to start the server. If it is successful the command prompt will display the server is runing on port 4242. In a web browser type 'localhost:4242' and you will be directed to the homepage of the chat rooms. Then select a room to join.

When you are finished to terminate the server press 'ctrl + c' and when prompted type 'y' then press enter. This will terminate the server. 
