import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

function LoadingContainer(){
    return(
        <div className="grid grid-cols-3 gap-4 p-4 justify-between w-3/4 mx-auto">
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
        </div>
    )
}

function LoadingProduct(){
    return(
        <Card>
            <CardContent className="py-4">
                <Skeleton className="h-48 w-full" />
                <div className="flex mt-4 justify-between">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
            </CardContent>
        </Card>
    )
}

export default LoadingContainer