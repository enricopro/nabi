import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { BiChevronsDown } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import firstp from './img/firstp.webp';
import macro from './img/macro.jpg';
import bringithome from './img/bringithome.png';
import { ReactComponent as Logo } from './img/logo.svg';

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
          <Logo fill='red' stroke='green' className="bg-secondary h-6"/>
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
          <h1 className="text-transparent text-7xl mt-10 font-bold bg-clip-text bg-gradient-to-t to-gray-500 from-indigo-200">Cubit</h1>
          <p className="text-secondary text-2xl mb-[4rem]">this is your personal controlnode</p>
        </div>
        <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 fadeIn">
          <div className="w-full flex flex-row bg-black tracking-tighter h-[490px] justify-between items-center">
            <div className="flex flex-col items-center justify-center w-1/2 bg-primary rounded-3xl p-10 h-full mr-5">
              <h2 className="text-secondary text-3xl font-semibold">What is a <span className="text-slate-300">controlnode</span>?</h2>
              <br/>
              <p className="text-secondary text-2xl font-semibold px-8">A controlnode is a single point of control over some parts of your digital life.<br/>
              The three pillars of your digital life are your data, your identity and your connections.<br/>You can be either aware or unaware, but everyone has at least one controlnode.<br/>You can own it, or you can rent it - which really means that someone else owns it.</p>
            </div>
            <div className="bg-cover flex flex-col items-center justify-center w-1/2 rounded-3xl h-full ml-5 fadeIn" style={{backgroundImage: `url(${firstp})`}}>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t text-black">Are you</p>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t text-black">the only</p>
              <p className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-t text-black">owner?</p>
            </div>
          </div>
          <div className="w-full flex flex-row bg-black tracking-tighter h-[490px] justify-between items-center mt-10">
            <div className="flex flex-col items-center justify-center w-1/2 bg-primary rounded-3xl p-10 h-full mr-5">
              <br/>
              <p className="text-secondary text-2xl font-semibold px-8">Your Google account has a controlnode. Your data, your messages, your interests are all tied, in one way or the other, to this account.<br/>This account is a contract between you and Google.<br/>You can be banned, censored, excluded and used, all withouth crossing the agreement's limits.<br/><br/>cubit is a controlnode that you own</p>
            </div>
            <div className="w-1/2 flex flex-row justify-start mx-auto tracking-no rounded-3xl h-full bg-cover tracking-tighter ml-5" style={{backgroundImage: `url(${bringithome})`}} />
          </div>
          <div className="w-full flex flex-col justify-center items-center mx-auto my-10 bg-primary min-h-[490px] bg-cover rounded-3xl fadeIn" style={{backgroundImage: `url(${macro})`}}>
            <h2 className="text-5xl font-semibold text-secondary pt-7">How cubit will serve you</h2>
            <div className="w-full flex flex-col justify-end items-end mx-auto">
              <br/>
              <div className="flex flex-col items-start justify-center w-1/2 rounded-3xl p-10 h-full mr-5 text-secondary text-left">
                <div>
                  <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Network Attached Storage</p>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all">You data in one secure place, easily accessible at any time</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">ION node</p>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all">Identity is an important topic. Do not trust, verify by yourself!</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Bitcoin full node</p>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all">Help secure the most decentralised blockchain, while eliminating all third parties</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Hardware VPN</p>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all">Achieve a private connection to the World Wide Web</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Home Assistant</p>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all">Automate your Home, while maintaing full control</p>
                </div>
                <p className="font-semibold mt-2">and much much more,because it’s truly yours...</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center mx-auto my-10 bg-primary min-h-[100px] rounded-3xl fadeIn">
            <div className="w-4/5">
              <p className="text-secondary text-2xl font-semibold p-10">Your Google account has a controlnode. Your data, your messages, your interests are all tied, in one way or the other, to this account.<br/>This account is a contract between you and Google.<br/>You can be banned, censored, excluded and used, all withouth crossing the agreement's limits.<br/><br/>cubit is a controlnode that you own</p>
            </div>
            <div className="w-1/5 text-secondary">
              LOGO
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
      <div className="w-screen h-screen bg-black flex justify-center realtive top-0 group fadeIn">
        <img className={`md:h-screen w-screen object-cover ${clicked ? 'blur-none transition-all 2s' : 'blur-sm'}`} src={require("./img/cubit.jpg")} alt="cubit"/>
        <BiChevronsDown onClick={() => setClicked(true)} size={30} className={`text-secondary absolute bottom-10 hover:scale-110 transition-all hover:cursor-pointer z-20 ${clicked ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      {renderWebsite()}
      
      
    </>
  )
}