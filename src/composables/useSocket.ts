import { io } from "socket.io-client";

class SocketioService {
  socket: any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:8080", {
      transports: ["websocket"],
    });

    return this.socket;
  }
}

export default new SocketioService();
