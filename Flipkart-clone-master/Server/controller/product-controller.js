import Product from "../model/product-schema.js";
export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};

export const getProductById = async (request, response) => {
  try {
    const id = request.params.id;
    // console.log(id);
    const product = await Product.findOne({ id: id });
    // console.log(product);
    response.status(200).json(product);
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};
