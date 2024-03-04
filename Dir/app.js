"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }  var _express = require('express'); var _express2 = _interopRequireDefault(_express);
  var _routesjs = require('./routes.js'); var _routesjs2 = _interopRequireDefault(_routesjs);
  require('./database/index.js');

  class App {
    constructor() {
      this.app = _express2.default.call(void 0, );

      this.midlewares();
      this.routes();
    }

    midlewares() {
      this.app.use(_express2.default.json());
    }

    routes() {
      this.app.use(_routesjs2.default);
    }
  }

  exports. default = new App().app;
