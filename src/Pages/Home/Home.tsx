import Navbars from "../NavBar/Navbars"
import { InfiniteMovingCardsDemo } from "./Cards"
import { DirectionAwareHoverDemo } from "./DirectionHoverImage"
import GoTo from "./GoTo"


const Home = () => {
  return (
   <div className="h-auto ">
  <Navbars/>
  <div className="grid">
    <div>
    <InfiniteMovingCardsDemo/>
    </div>
    <br />
    <div className="flex justify-center items-center">
    <p className="text-2xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    Take a look at some sample images.
      </p>
    </div>
    <div>
    <DirectionAwareHoverDemo/>
    </div>
    <div className="">
    <GoTo/>
    </div>
  </div>
   </div>
  )
}

export default Home
