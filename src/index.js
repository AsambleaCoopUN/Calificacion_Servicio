import app from "./app";
import { Server as websocketserver } from "socket.io";
import http from "http";
import { PORT } from "./config";
import sokets from "./sockets"; 

import { connectDB } from "./db";
import sockets from "./sockets";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log("server runnig on port", PORT);

const io = new websocketserver(httpServer);
sockets(io);

