import { stripe } from "../utils/stripe";

export const getProducts = async (limit) => {
  const products = await stripe.products.list({
    limit: 20,
    expand: ['data.default_price']
  })
  console.log("------All Products----")
  console.log(JSON.stringify(products,null,2))
  return products
}
export const getProductbyId = async (productId) => {
  const product = await stripe.products.retrieve(productId,{
    expand: ['default_price']
  })
  console.log("---------product-------------")
  console.log(JSON.stringify(product,null,2))
  return product
}