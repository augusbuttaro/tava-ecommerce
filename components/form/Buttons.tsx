'use client';

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LuPenSquare, LuTrash2 } from "react-icons/lu";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: "default" | "lg" | "sm";
};

export function SubmitButton({
  className = "",
  text = "Create Product",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please Wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType='edit' | 'delete'

export const IconButton = ({actionType, deleteClassName, editClassName}:{actionType:actionType, deleteClassName?:string, editClassName?:string})=>{
  const { pending } = useFormStatus()
  const renderIcon = ()=>{
    switch(actionType){
      case 'edit':
        return <LuPenSquare className={editClassName}/>;
      case 'delete':
        return <LuTrash2 className={deleteClassName} />;
      default:
        const never:never = actionType
        throw new Error(`Invalid action type ${never}`)
    }
  }
  return(
    <Button type='submit' size='icon' variant='ghost' className="text-primary">
      {pending? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  )
}

export const CardSignInBtn = ()=>{
  return (
    <SignInButton mode='modal'>
      <Button 
        type='button' 
        size='icon'
        variant='outline'
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

export const CardSubmitBtn = ({isFavorite}:{isFavorite:boolean})=>{
  const { pending } = useFormStatus()
  return(
    <Button
      type="submit"
      size='icon'
      variant='outline'
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
        ): isFavorite? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        ) }
    </Button>
  )
}

export const ProductSignInBtn = ()=>{
  return (
    <SignInButton mode='modal'>
      <Button type="button" className="mt-8">
       Sign In
      </Button>
    </SignInButton>
  )

}