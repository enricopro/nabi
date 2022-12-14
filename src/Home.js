import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { BiChevronsDown } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import firstp from './img/firstp.png';
import macro from './img/macro.gif';
import mobile from './img/mobile.jpg';
import bringithome from './img/bringithome.jpg';
import { Link } from "react-router-dom";

export default function Home() {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClicked(true);
    }, 2000);
 }, [clicked]);

  useEffect(() => {
    if(clicked) {
      return;
    }
    window.addEventListener('scroll', () => setClicked(true));
    return (() => window.removeEventListener('scroll', console.log()))
  }, [clicked])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://api.countapi.xyz/hit/nabispace/nabikey')
      await response.json()
    }
    fetchMyAPI()
  }, [])

  function renderWebsite() {
    if(clicked) {
      return <>
        <div className="w-screen flex flex-row items-center justify-between h-16 px-5 absolute top-0 fadeIn">
          <a href="https://nabi.technology/"className="flex flex-row text-secondary w-full items-center hover:cursor-pointer">
            <p>product by</p>
            <img className="ml-2 w-14" src={require("./img/logo.png")} alt="logo"/>
          </a>
          <div className="flex flex-row items-center">
            <a href="https://bit.ly/3AReQQT" className="z-10">
              <FaDiscord size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
            </a>
            <a href="https://bit.ly/3RxlxhW" className="z-10">
              <FaTwitter size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
            </a>
          </div>
        </div>
        <div className="h-screen w-screen flex flex-col justify-between items-center absolute top-0 fadeIn tracking-tighter font-semibold">
          <h1 className="text-transparent text-7xl mt-10 md:mt-20 font-normal bg-clip-text bg-gradient-to-t to-gray-500 from-indigo-200 tracking-tight">Cubit</h1>
          <p className="text-secondary text-3xl mb-[1.5rem] md:mb-20 ld:mb-24 md:text-center">your personal <br className="hidden md:block"/>controlnode</p>
        </div>
        <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-[-3rem] z-30 md:mt-0 fadeIn">
          <div className="w-full flex flex-row md:flex-col bg-black tracking-tighter z-30 min-h-[500px] md:h-auto justify-between md:justify-center items-stretch mt-10">
            <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-8 md:h-auto mr-5 md:mr-auto">
              <h2 className="text-secondary text-3xl font-semibold text-center">What is a controlnode?</h2>
              <br/>
              <p className="text-secondary text-2xl">A controlnode is any entity that exerts control over your Digital Life.<br/>
              The three pillars of your Digital Life are your Data, your Identity and your Connections.<br/><br/>Conscious or not, everyone has at least one controlnode.<br/><br/>You can own it, or you can rent it - which really means that someone else owns it.</p>
            </div>
            <div className="bg-cover flex flex-col items-center justify-center w-1/2 md:w-full rounded-3xl ml-5 md:hidden fadeIn" style={{backgroundImage: `url(${firstp})`}}>
              <p className="text-transparent text-[5rem] leading-tight font-bold bg-clip-text bg-gradient-to-t text-black">Are you</p>
              <p className="text-transparent text-[5rem] leading-tight font-bold bg-clip-text bg-gradient-to-t text-black">the</p>
              <p className="text-transparent text-[5rem] leading-tight font-bold bg-clip-text bg-gradient-to-t text-black">owner?</p>
            </div>
          </div>
          <div className="w-full flex flex-row md:flex-col bg-black tracking-tighter min-h-[500px] md:min-h-0 ld:h-[600px] md:h-auto justify-between md:justify-center items-stretch mt-10 md:mt-4">
            <div className="w-1/2 md:w-full flex flex-row justify-start mx-auto tracking-no rounded-3xl ld:h-[600px] bg-cover bg-right md:bg-center bg tracking-tighter mr-5 md:mr-0 md:mb-4 md:h-96" style={{backgroundImage: `url(${bringithome})`}} />
            <div className="flex flex-col items-center justify-center w-1/2 md:w-auto bg-primary rounded-3xl p-10 md:p-8 md:h-auto ml-5 md:ml-auto">
              <h2 className="text-secondary text-3xl font-semibold text-center">Cubit is a controlnode that you own</h2>
              <br/>
              <p className="text-secondary text-2xl">Your Google account has a controlnode. Your data, your messages, your interests are all tied to this account.<br/><br/>This account is a contract between you and Google.<br/>You can be banned, censored, excluded and used, all without crossing the agreement's limits.<br/><br/>Cubit is a controlnode that you own.</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mx-auto my-10 md:my-5 bg-primary min-h-[490px] bg-cover ld:bg-left rounded-3xl fadeIn md:hidden" style={{backgroundImage: `url(${macro})`}}>
            <h2 className="text-[4rem] font-semibold text-secondary pt-7 mb-5 md:mb-0 md:text-center md:text-5xl">How Cubit will serve you</h2>
            <div className="w-full flex flex-col justify-end items-end mx-auto">
              <br/>
              <div className="flex flex-col items-start justify-center w-1/2 md:w-full rounded-3xl p-10 md:p-0 md:pb-10 h-full mr-5 md:mr-0 md:pl-10 text-secondary md:pt-2">
                <div className="group">
                  <a href="https://developer.tbd.website/projects/dwn-sdk-js/README" target="_blank" rel="noreferrer" className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl hover:cursor-pointer font-semibold my-3 transition-all">Decentralized Web Node</p>
                    <FiExternalLink size={22} className="text-secondary ml-2"/>
                  </a>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Your data and messages in one secure place, easily accessible at any time</p>
                </div>
                <div className="group">
                  <a href="https://identity.foundation/ion/" target="_blank" rel="noreferrer" className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 transition-all">ION Node</p>
                    <FiExternalLink size={22} className="text-secondary ml-2"/>
                  </a>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Identity is an important topic. Do not trust, verify by yourself!</p>
                </div>
                <div className="group">
                  <a href="https://bitcoin.org/en/full-node" target="_blank" rel="noreferrer" className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 transition-all">Bitcoin Full Node</p>
                    <FiExternalLink size={22} className="text-secondary ml-2"/>
                  </a>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Help secure the most decentralized blockchain, while eliminating all third parties</p>
                </div>
                <div className="group">
                  <a href="https://lightning.network/" target="_blank" rel="noreferrer" className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 transition-all">Lightning Node</p>
                    <FiExternalLink size={22} className="text-secondary ml-2"/>
                  </a>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Join the Lightning Network in the most sovereign way possible</p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 transition-all">Password manager</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Access all of your password easily and fast, while keeping them safe and private</p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 transition-all">Home Assistant</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px] md:hidden">Automate your Home, while maintaing full control</p>
                </div>
                <p className="text-2xl font-semibold mt-2">and much much more,<br/>because it???s truly yours...</p>
              </div>
            </div>
          </div>
          <div className="w-full hidden flex-col justify-center mx-auto my-10 md:my-4 min-h-[490px] bg-cover bg-right rounded-3xl fadeIn md:flex p-8" style={{backgroundImage: `url(${mobile})`}}>
            <h2 className="text-[4rem] font-semibold text-secondary mb-5 md:mb-0 md:text-center md:text-5xl">How Cubit will serve you</h2>
            <div className="w-full flex flex-col mx-auto pr-8">
              <br/>
              <div className="flex flex-col items-start justify-center w-1/2 md:w-full rounded-3xl md:p-0 text-secondary">
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl hover:cursor-pointer font-semibold my-3 peer transition-all">Decentralized Web Node</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Your data and messages in one secure place, easily accessible at any time. <a href="https://developer.tbd.website/projects/dwn-sdk-js/README" target="_blank" rel="noreferrer" className="underline">Learn more.</a></p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">ION Node</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Identity is an important topic. Do not trust, verify by yourself! <a href="https://identity.foundation/ion/" target="_blank" rel="noreferrer" className="underline">Learn more.</a></p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Bitcoin Full Node</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Help secure the most decentralized blockchain, while eliminating all third parties. <a href="https://bitcoin.org/en/full-node" target="_blank" rel="noreferrer" className="underline">Learn more.</a></p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Lightning Node</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Join the Lightning Network in the most sovereign way possible. <a href="https://lightning.network/" target="_blank" rel="noreferrer" className="underline">Learn more.</a></p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Password manager</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Access all of your password easily and fast, while keeping them safe and private</p>
                </div>
                <div className="group">
                  <div className="flex flex-row items-center peer hover:cursor-pointer">
                    <MdOutlineKeyboardArrowDown size={22} className="text-secondary mr-3 -rotate-90 group-hover:rotate-0 transition-all"/>
                    <p className="text-2xl font-semibold hover:cursor-pointer my-3 peer transition-all">Home Assistant</p>
                  </div>
                  <p className="opacity-0 peer-hover:opacity-100 transition-all duration-1000 hover:opacity-100 ml-[34px]">Automate your Home, while maintaing full control</p>
                </div>
              </div>
            </div>
            <p className="text-2xl text-secondary font-semibold mt-2">and much much more,<br/>because it???s truly yours...</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center mx-auto mb-10 md:mb-4 bg-primary min-h-[490px] rounded-3xl fadeIn">
            <div className="flex flex-col justify-center items-center">
              <div className="text-[4rem] md:text-5xl font-semibold text-secondary pt-7 md:text-center md:p-8">What's inside</div>
              <div className="flex flex-row justify-center items-center">
                <div className="w-2/5 h-full p-10 text-secondary min-h-[1250px] flex flex-col justify-between items-center text-center md:hidden">
                  <p className="text-secondary text-6xl font-semibold">Simply<br/>compact</p>
                  <p className="text-secondary text-6xl font-semibold">Silent</p>
                  <p className="text-secondary text-6xl font-semibold">Fast</p>
                </div>
                <div className="w-3/5 md:w-full h-full mr-16 md:mr-5 md:pl-4 md:pb-4">
                  <img className="md:hidden" src={require("./img/esploso.png")} alt="components"/>
                  <img className="hidden md:block" src={require("./img/esploso_mobile.png")} alt="components"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row md:flex-col justify-center items-center p-5 mx-auto mb-10 md:mb-4 bg-primary min-h-[100px] rounded-3xl fadeIn md:p-8">
            <div className="md:w-full md:p-5 md:pt-0 text-secondary flex items-center justify-center">
              <img className="h-24" src={require("./img/logo.png")} alt="logo"/>
            </div>
            <div className="md:w-full">
              <p className="text-secondary text-2xl font-semibold p-5 md:p-0 md:pt-2 md:text-center">"Make Digital Self-Sovereignty so simple that everyone can provide for themselves."</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center mx-auto mb-10 md:mb-5 min-h-[50px] rounded-3xl fadeIn">
            <Link to="discover" className="text-primary bg-secondary font-bold p-5 mr-5 rounded-3xl hover:bg-gray-300 transition-all md:text-center">Discover our Vision</Link>
            <a href="https://bit.ly/3AReQQT" className="p-5 bg-[#5865F2] ml-5 rounded-3xl hover:bg-blue-500 text-white font-bold transition-all md:text-center">Learn more on Discord</a>
          </div>
        </div>
        <div className="w-full flex flex-col py-8 first-letter:justify-center bg-primary items-center mx-auto min-h-[100px] fadeIn">
          <p className="text-secondary">Founded by <a href="https://twitter.com/enricosystem" className="underline">Enrico</a>, <a href="https://twitter.com/permeteo" className="underline">Permeteo</a> and <a href="https://twitter.com/pippellia" className="underline">Pippellia</a>.</p>
          <p className="text-secondary">Logo made by <a href="https://www.instagram.com/radiciannodate/" className="underline">Anna</a>.</p>
          <p className="text-secondary">Nabi Technology</p>
        </div>
      </>
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="w-screen justify-center bg-black flex realtive top-0 group fadeIn">
        <img className={`md:h-screen ld:h-screen w-screen object-cover ${clicked ? 'blur-none transition-all 2s' : 'blur-sm'}`} src={require("./img/cubit.jpg")} alt="cubit"/>
        <BiChevronsDown onClick={() => setClicked(true)} size={30} className={`text-secondary absolute bottom-10 hover:scale-110 transition-all hover:cursor-pointer animate-bounce z-20 ${clicked ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      {renderWebsite()}
      
      
    </>
  )
}