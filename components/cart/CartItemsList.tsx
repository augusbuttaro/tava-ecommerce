import { Card } from '@/components/ui/card';
import { FirstColumn, SecondColumn, FourthColumn } from './CartItemColumns';
import ThirdColumn from './ThirdColumn';
import { CartItemWithProduct } from '@/utils/types';

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div className="space-y-4">
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { image, name, company, price, id: productId } = cartItem.product;

        return (
          <Card key={id} className="flex justify-between items-center p-4 bg-card border border-border shadow-sm space-x-4">
            <div className='flex gap-6 items-center w-1/2'>
                <FirstColumn image={image} name={name} />
                <SecondColumn name={name} company={company} productId={productId} />
            </div>
            <ThirdColumn quantity={amount} id={id} />
            <FourthColumn price={price} className="text-right" />
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemsList;
