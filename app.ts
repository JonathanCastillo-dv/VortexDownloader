import 'colors';
import 'dotenv/config'
import Server from './src/infrastructure/server/server.infrastructure';
const server = new Server();

server.listen();
