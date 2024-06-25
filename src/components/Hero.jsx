// import React from 'react'
// import Image1 from "../assets/hero/Decore.png";
import Image2 from "../assets/hero/Image.png";
import heroSvg from "../assets/Decore.svg"
import polygon from "../assets/Polygon.png";
import Navbar from  "../components/Navbar/Navbar.jsx";

// const ImageList = [
//     {
//         id: 1,
//         img: Image2,
//         subtitle: "BEST DESTINATIONS AROUND THE WORLD",
//         title: "Travel, enjoy and live a new and full life",
//         desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
//     },
//     {
//         id: 2,
//         img: Image2,
//         subtitle: "BEST DESTINATIONS AROUND THE WORLD",
//         title: "Travel, enjoy and live a new and full life",
//         desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
//     },
//     {
//         id: 3,
//         img: Image2,
//         subtitle: "BEST DESTINATIONS AROUND THE WORLD",
//         title: "Travel, enjoy and live a new and full life",
//         desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
//     },
// ]
const Hero = () => {
  return (
    <div>
      <div className="">
        <div className=" flex background-container">
        <div><img src={heroSvg} alt="Hero svg" className="background-image" /></div>
        <div className=""> <Navbar/>
        <div className="grid grid-cols-2 gap-3 p-20 font-poppins ">
          <div className="block pl-10">
          <div className="text-xl font-bold text-accent">Best Destinations around the world</div>
          <div className="text-7xl font-black text-dblue mt-5 mb-5"><span>Travel, enjoy <br /></span>  
          <span>and live a new <br /></span> 
          <span>and full life</span> 
        </div>
        {/* big text ends */}

        {/* smaller text begins */}
        <div className="block mb-5 text-faded">
          <span>Built Wicket longer admire do barton vanity itself do in it. <br /></span> 
            <span>Preferred to sportsmen it engrossed listening. <br /> </span> 
            <span>Park gate sell they west hard for the.</span>
        </div>
        {/* end of smaller text */}

        {/* button begins */}
        <div className="flex ">
          <div className="mr-20">
            <button className="text-white bg-secondary p-3 rounded-10">Find out more</button>
            
          </div>
          <div><button className="bg-accent rounded-full p-4"><img src={polygon} alt="Play button" /></button> <span className="text-faded">Play Demo</span></div>
        </div>
          </div>

          <div>
            <img src={Image2} alt="Hero image" />
          </div>
        </div>
        </div>
        </div>
               
      </div>
    </div>
  )
}

export default Hero;