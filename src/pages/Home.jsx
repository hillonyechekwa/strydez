import { useEffect, useState } from "react"
import Client from 'shopify-buy'





const HomePage = () => {
const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await client.product.fetchAll()
                console.log(response)
            } catch (error) {
                console.error('Error fetching product', error)
            }
            
        }


        fetchProducts();
    }, [])

    return (
        <div>
            <h1>Welcome to the home page!!</h1>

            <h3>Here are some of our products</h3>
            {/* {products.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))} */}
        </div>
    )
}


export default HomePage