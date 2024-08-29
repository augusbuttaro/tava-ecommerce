import { cn } from "@/lib/utils"
import { fetchProductRating } from "@/utils/actions"
import { IoStar } from "react-icons/io5"

async function ProductRating ({ productId, className } : { productId:string, className?:string }){
    const { count, rating } = await fetchProductRating(productId)
    const countValue = `(${count}) Reviews`
    return(
        <span className={cn(className)}>
            <IoStar />
            {rating} {countValue}
        </span>
    )
}

export default ProductRating