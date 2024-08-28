import { cn } from "@/lib/utils"

function EmptyList( { heading='No items found', className } : { heading?:String, className?:String } ){
    return(
        <h1 className={cn(className)}>
            {heading}
        </h1>
    )
}

export default EmptyList