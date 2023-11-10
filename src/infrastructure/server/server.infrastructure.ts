import express from 'express';
import compression from 'compression';
import serveIndex from 'serve-index';
import file from '../../interfaces/routes/file.route';
import path from 'path';
import { validateAndCreatePath } from '../../_common/utils/file.utils';


class Server {
  private PORT_SERVER = process.env.PORT_SERVER;
  private PATH_SHARED = path.join(__dirname, '../../../public/shared')
  private app = express();

  constructor() {
    validateAndCreatePath(this.PATH_SHARED)
  }

  private middleWares() {
    this.app.use(compression());
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use('/shared', express.static(this.PATH_SHARED), serveIndex(this.PATH_SHARED, { 'icons': true }));
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
