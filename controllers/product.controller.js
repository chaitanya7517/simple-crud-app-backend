
import Product from  '../model/product.model.js';

export const getAllProduct = async (req, res) => {
    try {
      const productData = await Product.find();
      res.status(200).json(productData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
     
      const data = await Product.findById(id);
      if (!data) {
        return res.status(400).json({ message: "Product not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const getProductUsingNameAndPrice = async (req, res) => {
    try {
      const { name, price } = req.query;
      let filter = {};
      if (name) filter.name = name;
      if (price) filter.price = price;
  
      const data = await Product.find(filter);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const creteProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const upadateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      let updatedData = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedData)
        return res.status(404).json({ message: "Product not found" });
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const deleteProduct =  async (req, res) => {
    try {
      const { id } = req.params;
      let deleteProduct = await Product.findByIdAndDelete(id);
  
      if (!deleteProduct)
        return res.status(400).json({ message: "Product not found" });
      res
        .status(200)
        .json({ message: "Product deleted successfully", deleteProduct });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}