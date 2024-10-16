import { product } from "../data/product"

function Products() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-[36px] text-red-600 font-bold">Our Products</h2>

        <div className="flex gap-8 phone:gap-12 flex-wrap items-center justify-center mt-8">
            {
                product.map((item, idx) => (
                    <div className="w-[350px] phone:w-[94%] rounded-[20px] overflow-hidden shadow-xl">
                        <img className="w-full" alt={item.name} src={item.img} />

                        <div className="p-3">
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products