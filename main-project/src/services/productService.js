import { stripe } from "../utils/stripe";

export const getProducts = async (limit) => {
  const products = await stripe.products.list({
    limit: 20,
    expand: ['data.default_price']
  })
  return products
}