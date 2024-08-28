import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"

function SectionTitle( { text, className } : { text:String, className?:String } ){
    return(
        <div>
            <h1 className={cn(className)}>{text}</h1>
        </div>
    )
}

export default SectionTitle