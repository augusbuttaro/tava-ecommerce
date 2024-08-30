import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/utils/format';
import { createOrderAction } from '@/utils/actions';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { Cart } from '@prisma/client';

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div className="space-y-6">
      <Card className="p-4 bg-card border border-border">
        <CartTotalRow label='Subtotal' amount={cartTotal} />
        <CartTotalRow label='Shipping' amount={shipping} />
        <CartTotalRow label='Tax' amount={tax}/>
        <CardTitle className="mt-4 text-xl font-bold text-primary-foreground">
          <CartTotalRow label='Order total' amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text='Place Order' className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground" />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({ label, amount, lastRow }: {
  label: string,
  amount: number,
  lastRow?: boolean
}) {
  return (
    <div className={`flex flex-col ${lastRow ? 'mt-4' : 'my-2'}`}>
        <div className='flex justify-between w-full items-center'>
            <p className={`font-medium text-muted-foreground ${lastRow? 'text-lg' : 'text-base'}`}>{label}</p>
            <p className="text-lg font-semibold text-muted-foreground">{formatCurrency(amount)}</p>
        </div>
      {lastRow ? <Separator className="my-2 border-muted" /> : null }
    </div>
  );
}

export default CartTotals;
