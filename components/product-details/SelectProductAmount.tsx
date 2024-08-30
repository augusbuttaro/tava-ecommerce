import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  
  export enum Mode {
    SingleProduct = 'singleProduct',
    CartItem = 'cartItem',
  }
  
  type SelectProductAmountProps = {
    mode: Mode.SingleProduct;
    amount: number;
    setAmount: (value: number) => void;
  };
  
  type SelectCartItemAmountProps = {
    mode: Mode.CartItem;
    amount: number;
    setAmount: (value: number) => Promise<void>;
    isLoading: boolean;
  };

  function SelectProductAmount(props:SelectCartItemAmountProps | SelectProductAmountProps){
    const { mode, amount, setAmount } = props
    const cartItem = mode === Mode.CartItem
    return(
        <div>
            <h1>Amount: </h1>
            <Select 
                defaultValue={amount.toString()} 
                onValueChange={(value)=> setAmount(Number(value))}
                disabled={cartItem? props.isLoading : false}
            >
                <SelectTrigger className={cartItem? 'w-20' : 'w-32'}>
                    <SelectValue placeholder={amount} />
                </SelectTrigger>
                <SelectContent>
                    {Array.from({length:cartItem? amount + 10 : 10}, (_,index)=>{
                        const selectValue = (index + 1).toString()
                        return(
                            <SelectItem key={index} value={selectValue}>
                                {selectValue}
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )
  }

  export default SelectProductAmount