"use client";

import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import Imagea from './ImageforDir/a.jpg'
import Imageb from './ImageforDir/b.jpg'
import Imagec from './ImageforDir/c.jpg'
export function DirectionAwareHoverDemo() {
  
    
  return (
    <>
    <div className="h-[30rem] relative  flex items-center justify-center gap-5">
      <DirectionAwareHover imageUrl={Imagea}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">Day light</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={Imageb}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">Day light</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={Imagec}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">Day light</p>
      </DirectionAwareHover>
      
    </div>

    </>
  );
}