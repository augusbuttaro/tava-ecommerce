import { formatCurrency } from "@/utils/format"
import Image from "next/image"
import Link from "next/link"

{/* Product Image */}

export const FirstColumn = ({ name, image }: { image: string; name: string }) => {
    return (
      <div className="w-40 h-24 hidden lg:inline relative overflow-hidden flex items-center justify-center p-2">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
    );
  };
  
  {/* Name and Company */}

  export const SecondColumn = ({ name, company, productId, className }:{
    name:string,
    company:string,
    productId:string,
    className?:string
  }) => {
    return(
      <div className={`${className} space-y-1`}>
        <Link href={`/products/${productId}`}>
          <h1 className="text-lg font-semibold text-primary hover:text-primary-foreground">{name}</h1>
        </Link>
        <h2 className="text-sm text-muted-foreground">{company}</h2>
      </div>
    )
  }
  
  {/* Product Price */}

  export const FourthColumn = ({ price, className } : { price:number, className?:string }) =>{
    return(
      <div className={`${className} text-left`}>
        <p className="text-sm lg:text-lg font-semibold text-muted-foreground">{formatCurrency(price)}</p>
      </div>
    )
  }
  
  