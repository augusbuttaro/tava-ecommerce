import { Button } from "../ui/button"
import { MdFavorite } from "react-icons/md";

function FavoriteToggleBtn( { productId } : { productId:String } ){
    return(
        <Button variant='outline' size='icon' className="rounded" >
            <MdFavorite />
        </Button>
    )
}

export default FavoriteToggleBtn