'use client';

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LuDelete, LuPenSquare, LuTrash2 } from "react-icons/lu";

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

export const IconButton = ({actionType}:{actionType:actionType})=>{
  const { pending } = useFormStatus()
  const renderIcon = ()=>{
    switch(actionType){
      case 'edit':
        return <LuPenSquare />;
      case 'delete':
        return <LuTrash2 />;
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
