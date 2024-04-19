import React from 'react'
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import { Button } from '@nextui-org/react';
const GoTo = () => {

    

  return (
    <div className="flex flex-col items-center justify-center h-screen">
         
              
              <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        
Explore a different way to edit photos.
      </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                    <Button  color="primary" variant="bordered">
                      Move on to design
                    </Button>
                </div>
          
        </div>
  )
}

export default GoTo
