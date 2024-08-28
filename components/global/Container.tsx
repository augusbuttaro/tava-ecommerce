import { cn } from "@/lib/utils"

function Container({ 
    children, 
    className 
}:{
    children:React.ReactNode,
     className?: string
}){
    return(
      <div className={cn(className)}>
        {children}
      </div>
    )
  }
  
  export default Container