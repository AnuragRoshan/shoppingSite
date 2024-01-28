const Order = require('../orderSchema'); // Adjust the path based on your project structure
const Product = require('../productSchema');
const { calculateTotalAmount, updateProductQuantities, generateOrderId } = require('./productFunc');


exports.checkout = async (req, res) => {
    try {
        const { user, address, items } = req.body;
        const totalAmount = await calculateTotalAmount(items);

        const order = new Order({
            orderId: generateOrderId(items),
            items: items.map(item => ({
                productId: item.productId,
                quantity: item.quantity
            })),
            totalAmount,
            customerName: user.name,
            shippingAddress: address,
        });

        await order.save();
        // // Save order to database

        // // Update product quantities
        await updateProductQuantities(items);

        // res.status(200).json({ message: order });
        res.status(200).json({ message: 'Order placed successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.products = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.searchProducts = async (req, res) => {
    const { searchQuery } = req.body;

    try {
        if (!searchQuery) {
            return res.status(400).json({ error: 'Search query is required in the request body.' });
        }

        // Use a regular expression to perform a case-insensitive search on productName and description
        const searchResults = await Product.find({
            $or: [
                { productName: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } },
            ],
        });

        res.status(200).json({ success: true, results: searchResults });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.update = async (req, res) => {


}

