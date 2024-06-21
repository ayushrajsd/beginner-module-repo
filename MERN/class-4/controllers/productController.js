const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find();
  // const allProducts = await ProductModel.find({isInStock :true})
  console.log(allProducts);
  return res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json(product);
};

const updateProductById = async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  return res.status(201).json({ message: "Resources Updated" });
};

const createProduct = async (req, res) => {
  const { product_name, product_price, isInStock, category, password, confirmPassword } = req.body;
  try {
    const product = await ProductModel.create({
      product_name: product_name,
      product_price: product_price,
      isInStock: isInStock,
      category: category,
      password: password,
      confirmPassword: confirmPassword,
    });

    console.log(product);

    return res.status(201).json({ message: "Product Created" });
  } catch (err) {
    console.log("got an error",err.message);
    return res.status(400).json({ message: "Something went wrong", error: err.message});
  }
};

const deleteProductById = async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  return res.status(201).json({ message: "Resource Deleted" });
};

module.exports = {
    getAllProducts,
    getProductById,
    updateProductById,
    createProduct,
    deleteProductById,
}
