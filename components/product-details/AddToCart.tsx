import { Button } from "../ui/button"

function AddToCart ({ productId } : { productId:string }){
    return(
        <Button className='capitalize mt-8 hover:bg-secondary hover:text-secondary-foreground' size='lg'>
            add to cart
        </Button>
    )
}

export default AddToCart