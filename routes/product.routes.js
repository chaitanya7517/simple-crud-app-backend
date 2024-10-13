import express from "express";
import {
  getAllProduct,
  getProductById,
  getProductUsingNameAndPrice,
  creteProduct,
  upadateProduct,
  deleteProduct
} from  "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getAllProduct);
router.get("/Applyfilter", getProductUsingNameAndPrice);
router.get("/:id", getProductById);

router.post("/create", creteProduct);

router.put('/update/:id',upadateProduct);

router.delete('/delete/:id',deleteProduct);

export default router;