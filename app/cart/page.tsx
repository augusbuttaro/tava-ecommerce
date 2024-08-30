import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import SectionTitle from '@/components/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function Cart(){
  const { userId } = auth();
  if (!userId) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) return <SectionTitle text='Empty Cart' className="text-center mt-20 text-xl font-semibold text-muted-foreground" />;

  return (
    <div className="container mx-auto my-8 p-4">
      <SectionTitle text='Shopping Cart' className="text-3xl font-bold mb-8 text-muted-foreground" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-1">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
