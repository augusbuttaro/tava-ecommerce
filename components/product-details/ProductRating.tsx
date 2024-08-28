import { cn } from "@/lib/utils"
import { IoStar } from "react-icons/io5"

function ProductRating ({ productId, className } : { productId:string, className?:string }){
    const rating = 4.2
    const count = 20
    const countValue = `(${count}) Reviews`
    return(
        <span className={cn(className)}>
            <IoStar />
            {rating} {countValue}
        </span>
    )
}

export default ProductRating