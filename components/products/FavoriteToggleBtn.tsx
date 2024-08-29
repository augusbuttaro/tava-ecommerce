import { auth } from "@clerk/nextjs/server";
import { Button } from "../ui/button"
import { FaHeart } from "react-icons/fa";
import { CardSignInBtn } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleBtn( { productId } : { productId:string } ){
    const { userId } = auth() 
    if(!userId) return <CardSignInBtn />
    const favoriteId = await fetchFavoriteId({productId})

    return(
        <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
    )
}

export default FavoriteToggleBtn