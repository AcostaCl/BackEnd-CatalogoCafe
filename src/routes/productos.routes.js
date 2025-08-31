import { Router } from "express";
import {
  borrarProductoPorId,
  crearProducto,
  editarProductoPorId,
  leerProductoPorId,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";

const router = Router();
//get, post, put, delete
router.route("/test").get(test);
router.route("/").get(leerProductos).post(crearProducto);
router
  .route("/:id")
  .get(leerProductoPorId)
  .delete(borrarProductoPorId)
  .put(editarProductoPorId);
export default router;
