 # Here I have implemented the following:

 # npm i socket.io
 
 1. Socket.IO allows the server to push information to the client in real time, when events occur on the server.

 2. Without Socket.IO, the client would have to make multiple polling AJAX calls to verify that the event has occurred on the server. For example, the client could use JavaScript to check for an event on the server every 5 seconds.

 3. Socket.io-client is the client version of socket.io, that allows us to "emit" events to the client. Once received by the server, we can use the server version of socket.io to do stuff like sending messages to users in the same room as the sender, or join a user to a socket room.

 4. [Link][def]

[def]: https://www.freecodecamp.org/news/build-a-realtime-chat-app-with-react-express-socketio-and-harperdb/

5. 