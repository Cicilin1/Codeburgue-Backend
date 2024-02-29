  import express from "express";
  import routes from "./routes.js";
  import "./database/index.js";

  class App {
    constructor() {
      this.app = express();

      this.midlewares();
      this.routes();
    }

    midlewares() {
      this.app.use(express.json());
    }

    routes() {
      this.app.use(routes);
    }
  }

  export default new App().app;
