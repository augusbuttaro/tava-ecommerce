import Link from "next/link";
import { Button } from "../ui/button";
import { IoCartOutline } from "react-icons/io5";

async function CartButton() {
  const cartItems = 9;

  return (
    <Button 
      asChild 
      variant="outline" 
      size="icon" 
      className="relative flex justify-center items-center transition-transform transform hover:scale-105"
    >
      <Link href="/cart">
        <IoCartOutline className="size-5" />
        <span className="absolute -bottom-2 -right-2 bg-primary rounded-full size-4 flex justify-center 
          items-center text-xs text-primary-foreground">
          {cartItems}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
