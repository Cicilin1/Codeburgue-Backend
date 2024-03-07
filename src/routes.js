import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js"

import ProductController from "./app/controllers/ProductController.js";
import SessionsController from "./app/controllers/SessionsController.js";
import CategoryController from "./app/controllers/CategoryController.js"
import UserController from "./app/controllers/UserController.js";

import authMiddleware from "./app/middlewares/auth.js"

const upload = multer(multerConfig)

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionsController.store);

routes.use(authMiddleware) // todas as rotas abaixo irã passar pela verificação

routes.post("/product", upload.single("file"), ProductController.store);
routes.get("/product", ProductController.index);

routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);

export default routes;
