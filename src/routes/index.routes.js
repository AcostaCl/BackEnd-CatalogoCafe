import productoRoutes from "./productos.routes.js";
import { Router } from "express";

const router = Router();

router.use("/productos", productoRoutes);

export default router;
