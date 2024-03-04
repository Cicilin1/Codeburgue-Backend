"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerjs = require('./config/multer.js'); var _multerjs2 = _interopRequireDefault(_multerjs);

var _ProductControllerjs = require('./app/controllers/ProductController.js'); var _ProductControllerjs2 = _interopRequireDefault(_ProductControllerjs);
var _SessionsControllerjs = require('./app/controllers/SessionsController.js'); var _SessionsControllerjs2 = _interopRequireDefault(_SessionsControllerjs);

var _UserControllerjs = require('./app/controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);


const upload = _multer2.default.call(void 0, _multerjs2.default)

const routes = new (0, _express.Router)();

routes.post("/users", _UserControllerjs2.default.store);

routes.post("/sessions", _SessionsControllerjs2.default.store);

routes.post("/product",upload.single("file"),  _ProductControllerjs2.default.store);

exports. default = routes;
