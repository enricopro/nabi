import { FaDiscord } from 'react-icons/fa';
import { BiChevronsDown } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if(clicked) {
      setTimeout(() => {
        setClicked(true);
      }, 2000);
    } else {
      setClicked(false);
    }
 }, [clicked]);

  function renderWebsite() {
    if(clicked) {
      return <>
        <div className="w-screen flex flex-row items-center justify-between h-16 px-5 absolute top-0 fadeIn">
          <p className="text-secondary">LOGO</p>
          <a href="https://discord.gg/Kv7hyVFs" className="w-29 h-10 bg-sky-600 hover:bg-sky-700 flex flex-row items-center px-2 pr-4 rounded-md transition-all z-10">
            <FaDiscord size={22} className="text-secondary mx-2"/>
            <p className="text-secondary text-s">Join our Discord</p>
          </a>
        </div>
        <div className="w-screen h-screen flex flex-col justify-between items-center absolute top-0 fadeIn">
          <h1 className="text-secondary text-6xl mt-20 peer">Cubit</h1>
          <p className="text-secondary text-xl mb-20">this is your personal controlnode</p>
        </div>
        <div className="w-screen bg-secondary flex flex-row">

        </div>
      </>
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center realtive top-0 group">
        <img className={`h-screen object-cover ${clicked ? 'blur-none transition-all 2s' : 'blur-sm'}`} src={require("./img/cubit.png")} alt="cubit"/>
        <BiChevronsDown onClick={() => setClicked(true)} size={30} className="text-secondary absolute bottom-10 hover:scale-110 transition-all hover:cursor-pointer z-20 peer"/>
      </div>
      
      {renderWebsite()}
      
      
    </>
  )
}