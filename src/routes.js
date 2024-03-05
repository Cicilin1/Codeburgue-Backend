import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js"

import ProductController from "./app/controllers/ProductController.js";
import SessionsController from "./app/controllers/SessionsController.js";

import UserController from "./app/controllers/UserController.js";


const upload = multer(multerConfig)

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionsController.store);

routes.post("/product",upload.single("file"),  ProductController.store);
routes.get("/product",  ProductController.index);

export default routes;
