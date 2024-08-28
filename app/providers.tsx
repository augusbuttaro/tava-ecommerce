'use client'

import React from "react"
import { ThemeProvider } from "./theme-provider"

function Providers ({children}:{children:React.ReactNode}){
    return(
        <>
        <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </>
    )
}

export default Providers