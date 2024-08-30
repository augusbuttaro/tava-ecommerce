'use client';

import { useState } from 'react';
import SelectProductAmount from '../product-details/SelectProductAmount';
import { Mode } from '../product-details/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '../ui/use-toast';

function ThirdColumn ({ quantity, id, className } : {quantity:number, id:string, className?:string} ){
  const [amount, setAmount] = useState(quantity)
  const [isLoading, setLoading] = useState(false)
  const { toast } = useToast()
  
  const handleAmountChange = async (value:number)=>{
    setLoading(true)
    toast({description:'Calculating...'})
    const result = await updateCartItemAction({ amount: value, cartItemId: id })
    setAmount(value)
    toast({description: result.message})
    setLoading(false)
  }
  
  return(
    <div className={className}>
      <SelectProductAmount    
        amount={amount} 
        setAmount={handleAmountChange} 
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}> 
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' text='Remove' className="bg-destructive text-destructive-foreground" />
      </FormContainer>
    </div>
  )
}

export default ThirdColumn;
