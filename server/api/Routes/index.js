const router = require("express").Router();


const productController = require("../Controller/productApi");





router.post("/checkout", productController.checkout);
router.get("/products", productController.products);
router.get("/search", productController.searchProducts);



module.exports = router;