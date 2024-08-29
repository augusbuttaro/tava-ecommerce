import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function loading(){
    return (
        <section>
            <ReviewLoadingCard />
            <ReviewLoadingCard />
        </section>
    )
}

const ReviewLoadingCard = () =>{
    return(
        <Card>
            <CardHeader>
                <div>
                    <Skeleton />
                    <div>
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}

export default loading