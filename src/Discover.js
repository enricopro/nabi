import { FaDiscord, FaTwitter } from 'react-icons/fa';
import cctv from './img/cctv.png';
import locker from './img/locker.png';
import btcbutterfly from './img/btcbutterfly.jpg';
import { useEffect } from 'react';

export default function Discover() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-screen flex flex-row items-center justify-between h-16 px-5 absolute top-0 fadeIn">
        <a href="https://nabi.technology/"className="flex flex-row text-secondary w-full items-center">
        </a>
        <div className="flex flex-row items-center">
          <a href="https://discord.gg/Kv7hyVFs" className="z-10">
            <FaDiscord size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
          <a href="https://discord.gg/Kv7hyVFs" className="z-10">
            <FaTwitter size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center mt-20">
        <img className="mr-2 w-32" src={require("./img/logo.png")} alt="logo"/>
        <h1 className="text-secondary text-7xl">vision</h1>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 fadeIn">
        <div className="w-full flex flex-row md:flex-col tracking-tighter min-h-[490px] justify-between">
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-2 md:py-5 mr-5 md:mr-0">
            <p className="text-secondary text-2xl font-semibold px-8">Technology is about the people.<br/>We really believe that.<br/>Humanity has always built new tools to achieve a higher standard of living and mitigate the risk that lies in the unknowable future.<br/><br/>From the wheel to the smartphone, technology helped us achieve an ever-better present and gave us the direction to imagine an ever-hopeful future.<br/>But where there is bright, there is also the dark, where there are benefits there are also challenges.<br/><br/>The Web today is centralized and a handful of companies dominate over it. We were so dependent on this system that we couldn't think of any alternatives.<br/>But things are changing.</p>
          </div>
          <div className="w-1/2 md:w-full rounded-3xl ml-5 md:ml-0 mt-5 fadeIn flex flex-col justify-center items-center">
            <img src={require("./img/handcuff.png")} alt="handcuff" className="h-[42rem] md:h-[30rem] object-contain"/>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 md:mt-5 fadeIn">
        <div className="w-full flex flex-row md:flex-col-reverse tracking-tighter min-h-[490px] justify-between">
          <div className="w-1/2 md:w-full md:h-[490px] rounded-3xl mr-5 md:mr-0 fadeIn bg-cover bg-right" style={{backgroundImage: `url(${cctv})`}}>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:px-2 md:py-5 ml-5 md:ml-0 md:mb-5">
            <p className="text-secondary text-2xl font-semibold px-8">Computer technology has advanced relentlessly in the last few decades, always raising the bar to new heights.<br/><br/>In our hands we now have more power and knowledge than any other human being that came before us.<br/>Every person in just 1 click can reach any piece of information in this vast database that we call the Internet - a library so big that would be almost unimaginable, if we didn't already build it.<br/><br/>But despite these terrific accomplishments, we fall over and over for the same tricks. We have structured this library in a way that it needs some librarians. And if they don't like you, or if the guy with a gun at the librarian’s head doesn't like you - you are not welcome in the library anymore.</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 md:mt-0 fadeIn">
        <div className="w-full flex flex-row md:flex-col tracking-tighter min-h-[490px] justify-between">
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:px-2 md:py-5 md:mt-5 mr-5 md:mr-0 md:mb-5">
            <p className="text-secondary text-2xl font-semibold px-8">Is this the only way?<br/>Are we doomed to choose between centralisation or inefficiency?<br/><br/>No. And we are not the only ones to believe this.<br/><br/>We are part of a bigger movement that has its origin in the cyberpunks.<br/>We believe in Privacy, which is the power to selectively reveal oneself to the world. We also believe in the importance of Cryptography, because to encrypt is to indicate the desire for privacy.<br/><br/>We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence.<br/>Therefore we shall act.</p>
          </div>
          <div className="w-1/2 md:w-full md:h-[490px] rounded-3xl ml-5 md:ml-0 fadeIn bg-cover bg-right" style={{backgroundImage: `url(${locker})`}}>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 md:mt-5 mb-10 md:mb-0 fadeIn">
        <div className="w-full flex flex-row md:flex-col-reverse tracking-tighter min-h-[490px] justify-between">
          <div className="w-1/2 md:w-full md:h-[490px] rounded-3xl mr-5 md:mr-0 md:mt-5 fadeIn bg-cover bg-center" style={{backgroundImage: `url(${btcbutterfly})`}}>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:px-2 md:py-5 ml-5 md:ml-0">
            <p className="text-secondary text-2xl font-semibold px-8">Now the technology is mature for replacing the Internet of Corporations with the Internet of Peers.<br/><br/>There are obstacles to overcome for making this dream into reality. Self sovereignty is hard, self custody is hard - but they shall not be. Privacy, Security and Ownership are universal human rights - and shall not be limited to only those that are competent enough to provide for their own Digital Life.<br/><br/>Nabi is a piece of the revolution. And our goal is to build the world's best controlnode, so that everyone can seamlessly join this side, from the plumber to your grandma.<br/><br/>And you can be part of this too.</p>
            <a href="https://discord.gg/Kv7hyVFs" className="p-5 py-3 bg-[#5865F2] ml-5 mt-5 rounded-3xl hover:bg-blue-500 text-white font-bold transition-all">Let’s talk on Discord</a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-8 first-letter:justify-center bg-primary items-center mx-auto min-h-[100px] fadeIn">
        <p className="text-secondary">Renders made by <a href="https://www.instagram.com/_matteocorra/" className="underline">Permeteo</a>.</p>
        <p className="text-secondary">Logo made by <a href="https://www.instagram.com/radiciannodate/" className="underline">Anna</a>.</p>
        <p className="text-secondary">Nabi Technology</p>
      </div>
    </>
  )
}