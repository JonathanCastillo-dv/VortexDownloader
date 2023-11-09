import express from 'express';
import compression from 'compression';
import serveIndex from 'serve-index';
import file from '../../interfaces/routes/file.route';
import path from 'path';


class Server {
  private PORT_SERVER = process.env.PORT_SERVER;
  private app = express();

  private middleWares() {
    this.app.use(compression());
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use('/shared', express.static(path.join(__dirname, '../../../public/shared')), serveIndex('public/shared', { 'icons': true }));
  }

  private routes() {
    this.app.use('/api/v1/file', file);
  }

  listen() {
    this.middleWares();
    this.routes();
    this.app.listen(this.PORT_SERVER, () =>
      console.log(`Server running on http://localhost:${this.PORT_SERVER}`.bgGreen),
    );
  }
}

export default Server;
