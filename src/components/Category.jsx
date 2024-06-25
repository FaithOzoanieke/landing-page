// import React from 'react'
import firstIcon from "../assets/Group48.png";
import secondIcon from "../assets/Group49.png";
import thirdIcon from "../assets/Group50.png";
import fourthIcon from "../assets/Group51.png";

const Category = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
    <div className="font-semibold text-s text-faded mt-40">CATEGORY</div>
    <div className="text-4xl font-bold text-dblue">We Offer Best Services</div>
    <div className="flex flex-row gap-5">
    
      <div className=" block bg-white shadow-md rounded-lg overflow-hidden p-10 hover:bg-zinc-50">
        <img className="mb-5" src={firstIcon} alt="" />
        <span className="font-bold text-sblue mb-3 block">Calculated Weather</span>
        <p className="text-sblue">
         Built Wicket longer<br/> admire do barton vanity <br/> itself do in it.</p>
      </div>

      {/* second */}
      <div className=" block bg-white shadow-md rounded-lg overflow-hidden p-10 hover:bg-zinc-50">
        <img className="mb-5" src={secondIcon} alt="" />
        <span className="font-bold text-sblue mb-3 block">Best Flight</span>
        <p className="text-sblue">
        Engrossed listening. <br/> Park gate sell they  <br/> west hard for the.</p>
      </div>

      {/* third  */}
      <div className=" block bg-white shadow-md rounded-lg overflow-hidden p-10 hover:bg-zinc-50">
        <img className="mb-5" src={thirdIcon} alt="" />
        <span className="font-bold text-sblue mb-3 block">Local Events</span>
        <p className="text-sblue">
        Barton vanity itself do<br/> in it. Preferred to men <br/> it engrossed listening. </p>
      </div>

      {/* fourth */}
      <div className=" block bg-white shadow-md rounded-lg overflow-hidden p-10 hover:bg-zinc-50">
        <img className="mb-5" src={fourthIcon} alt="" />
        <span className="font-bold text-sblue mb-3 block">Customization</span>
        <p className="text-sblue">
        We deliver outsourced<br/> aviation services for <br/> military customers</p>
      </div>

      
    </div>
    </div>
  )
}

export default Category