const router = require("express").Router();


const productController = require("../Controller/productApi");





router.post("/checkout", productController.checkout);
router.get("/products", productController.products);
router.get("/search", productController.searchProducts);
router.get("/productDetail/:id", productController.productDetail);
router.post("/toggleCart", productController.addToCart);
router.get("/cart", productController.cart);




module.exports = router;