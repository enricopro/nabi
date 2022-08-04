import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { BiChevronsDown } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import firstp from './img/firstp.jpg';
import power from './img/power.jpg';
import waves from './img/waves.jpg';


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
          <div className="flex flex-row items-center">
            <a href="https://discord.gg/Kv7hyVFs" className="z-10">
              <FaDiscord size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
            </a>
            <a href="https://discord.gg/Kv7hyVFs" className="z-10">
              <FaTwitter size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
            </a>
          </div>
        </div>
        <div className="h-screen w-screen flex flex-col justify-between items-center absolute top-0 fadeIn tracking-tighter font-semibold">
          <h1 className="text-transparent text-7xl mt-20 font-bold bg-clip-text bg-gradient-to-t from-gray-500 to-indigo-200">Cubit</h1>
          <p className="text-secondary text-2xl mb-[7rem]">this is your personal controlnode</p>
        </div>
        <div className="w-11/12 flex flex-col mx-auto mt-10 fadeIn">
          <div className="w-full flex flex-row bg-black tracking-tighter h-[490px] justify-between items-center">
            <div className="flex flex-col items-center w-1/2 bg-primary rounded-3xl p-10 h-full mr-5">
              <h2 className="text-secondary text-3xl font-semibold">What is a <span className="text-slate-300">controlnode</span>?</h2>
              <br/>
              <p className="text-secondary text-2xl font-semibold">A controlnode is a single point of control over some parts of your digital life.<br/>
              The three pillars of your digital life are your data, your identity and your connections.<br/>You can be either aware or unaware, but everyone has at least one controlnode.<br/>You can own it, or you can rent it - which really means that someone else owns it.</p>
            </div>
            <div className="bg-cover flex flex-col items-center justify-center w-1/2 rounded-3xl h-full ml-5" style={{backgroundImage: `url(${firstp})`}}>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t from-rose-200 to-rose-300">You are</p>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t from-rose-300 to-rose-400">the only</p>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t from-rose-400 to-rose-500">owner</p>
            </div>
          </div>
          <div className="w-full flex flex-row bg-black tracking-tighter h-[490px] justify-between items-center mt-10">
            <div className="w-1/2 flex flex-row justify-start mx-auto tracking-no rounded-3xl h-full bg-cover tracking-tighter mr-5" style={{backgroundImage: `url(${power})`}}>
            </div>
            <div className="flex flex-col items-center w-1/2 bg-primary rounded-3xl p-10 h-full ml-5">
              <br/>
              <p className="text-secondary text-2xl font-semibold">Your Google account has a controlnode. Your data, your messages, your interests are all tied, in one way or the other, to this account.<br/>This account is a contract between you and Google.<br/>You can be banned, censored, excluded and used, all withouth crossing the agreement's limits.<br/><br/>cubit is a controlnode that you own</p>
            </div>
          </div>
          <div className="w-full flex flex-col mx-auto my-10 fadeIn">
            <h2 className="text-secondary font-bold text-5xl text-center mb-5">What's <span className="text-white">inside</span>?</h2>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center justify-center w-1/6 bg-cover rounded-3xl h-40" style={{backgroundImage: `url(${waves})`}}>
                <p className="text-secondary text-2xl text-center font-semibold">Network Attached Storage</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/6 bg-primary rounded-3xl h-40">
              <p className="text-secondary text-2xl text-center font-semibold">ION<br/>Node</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/6 bg-primary rounded-3xl h-40">
                <p className="text-secondary text-2xl text-center font-semibold">Bitcoin <br/>Full <br/>Node</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/6 bg-primary rounded-3xl h-40">
                <p className="text-secondary text-2xl text-center font-semibold">Hardware<br/>VPN</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/6 bg-primary rounded-3xl h-40">
                <p className="text-secondary text-2xl text-center font-semibold">Home Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </>
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center realtive top-0 group">
        <img className={`h-screen bg-contain ${clicked ? 'blur-none transition-all 2s' : 'blur-sm'}`} src={require("./img/cubit.jpg")} alt="cubit"/>
        <BiChevronsDown onClick={() => setClicked(true)} size={30} className={`text-secondary absolute bottom-10 hover:scale-110 transition-all hover:cursor-pointer z-20 ${clicked ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      {renderWebsite()}
      
      
    </>
  )
}