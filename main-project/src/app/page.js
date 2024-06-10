import Link from "next/link"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../services/productService"

const Page = async () => {
    const products = await getProducts(9)
    console.log(JSON.stringify(products,null,2))
    return (
        <div>
           <div className="m-4 flex flex-wrap justify-center gap-4">
            {
                products.data.map((item)=> {
                    return <ProductCard item={item}/>
                })
            }
           </div>
           <Link href="/products" className="inline-block text-orange-400 p-4 font-bold hover:underline">View All {">"}</Link>
        </div>
    )
}

export default Page