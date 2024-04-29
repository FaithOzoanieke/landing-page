// import React from 'react'
import Image1 from "../assets/hero/Decore.png";
import Image2 from "../assets/hero/Image.png";
import heroSvg from "../assets/Decore.svg"
import Navbar from  "../components/Navbar/Navbar.jsx";

const ImageList = [
    {
        id: 1,
        img: Image2,
        subtitle: "BEST DESTINATIONS AROUND THE WORLD",
        title: "Travel, enjoy and live a new and full life",
        desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
    },
    {
        id: 2,
        img: Image2,
        subtitle: "BEST DESTINATIONS AROUND THE WORLD",
        title: "Travel, enjoy and live a new and full life",
        desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
    },
    {
        id: 3,
        img: Image2,
        subtitle: "BEST DESTINATIONS AROUND THE WORLD",
        title: "Travel, enjoy and live a new and full life",
        desription: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the."
    },
]
const Hero = () => {
  return (
    <div>
      <div>
        <div className=" flex background-container">
        <img src={heroSvg} alt="Hero svg" className="background-image" />
        <Navbar/>
        </div>
      </div>
    
    </div>
  )
}

export default Hero;