import { FaDiscord, FaTwitter } from 'react-icons/fa';
import cctv from './img/cctv.png';
import locker from './img/locker.png';
import btcbutterfly from './img/btcbutterfly.jpg';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Discover() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-screen flex flex-row items-center justify-between h-16 px-5 absolute top-0 fadeIn">
        <Link to="/" className="flex flex-row text-secondary w-full items-center hover:cursor-pointer">
          <img className="ml-2 w-14" src={require("./img/logo.png")} alt="logo"/>
        </Link>
        <div className="flex flex-row items-center">
          <a href="https://bit.ly/3AReQQT" className="z-10">
            <FaDiscord size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
          <a href="https://bit.ly/3RxlxhW" className="z-10">
            <FaTwitter size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center mt-20">
        <img className="mr-2 w-32" src={require("./img/logo.png")} alt="logo"/>
        <h1 className="text-secondary text-7xl">vision</h1>
      </div>
      <p className="text-secondary text-2xl p-5 md:p-0 md:pt-2 text-center w-11/12 mx-auto">"Make Digital Self Sovereignty so simple that everyone can provide for themselves."</p>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-20 md:mt-10 fadeIn">
        <div className="w-full flex flex-row md:flex-col tracking-tighter justify-between items-stretch">
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-8 mr-5 md:mr-0 h-full">
            <p className="text-secondary text-2xl">Technology is about people.<br/>We do believe in it.<br/>Humanity has always built new tools to achieve higher standards of living and mitigate the risks that lie in the unknowable future.<br/><br/>From the wheel to the smartphone, technology helped us to achieve an ever-better present which gave us the direction towards an ever-hopeful future.<br/>But where's bright, it's also dark, and when there are successes there are also challenges.<br/><br/>The Web today is centralized and dominated by a handful of companies. We were so dependent on this system that we couldn't think of any alternatives.<br/>But things are changing.</p>
          </div>
          <div className="w-1/2 md:w-full rounded-3xl ml-5 md:ml-0 mt-5 md:mt-4 fadeIn flex flex-col justify-center items-center h-full">
            <img src={require("./img/handcuff.png")} alt="handcuff" className="h-[42rem] md:h-[30rem] object-contain mt-[-100px] md:mt-0"/>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 md:mt-4 fadeIn">
        <div className="w-full flex flex-row md:flex-col-reverse tracking-tighter justify-between ld:items-center">
          <div className="w-1/2 md:w-full md:h-[490px] rounded-3xl mr-5 md:mr-0 fadeIn bg-cover bg-right ld:h-[590px]" style={{backgroundImage: `url(${cctv})`}}>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-8 ml-5 md:ml-0 md:mb-4">
            <p className="text-secondary text-2xl">Computer technology has advanced relentlessly in recent decades, always raising the bar to new heights.<br/><br/>Now, in our hands, we have more power and knowledge than any human being before us.<br/>Each person, with a single click, can reach any information in this vast database we call the Internet - a library so large that it would be almost unimaginable if we hadn’t already built it.<br/><br/>Despite these terrific accomplishments, we fall everytime into the same pitfalls: we have structured this library so that it needs librarians. And if they don't like you, or if the guy with the gun pointed at the librarian's head doesn't like you, you are no longer welcome in the library.</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 md:mt-0 fadeIn">
        <div className="w-full flex flex-row md:flex-col tracking-tighter min-h-[490px] justify-between ld:items-center">
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-8 md:mt-4 mr-5 md:mr-0 md:mb-4">
            <p className="text-secondary text-2xl">Is this the only way?<br/>Are we doomed to choose between centralization and inefficiency?<br/><br/>No. And we are not the only ones who believe that.<br/><br/>We are part of a larger community that originates from the Cypherpunk movement.<br/>We believe in Privacy, which is the power to selectively reveal oneself to the world. We also believe in the significance of Cryptography, because to encrypt is to indicate the desire for privacy.<br/><br/>We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence.<br/>Therefore we shall act.</p>
          </div>
          <div className="w-1/2 md:w-full md:h-[490px] rounded-3xl ml-5 md:ml-0 fadeIn bg-cover bg-right ld:h-[590px]" style={{backgroundImage: `url(${locker})`}}>
          </div>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto my-10 md:mt-4 md:mb-0 fadeIn">
        <div className="w-full flex flex-row md:flex-col-reverse tracking-tighter min-h-[490px] justify-between ld:items-center">
          <div className="w-1/2 md:w-full md:h-[390px] rounded-3xl mr-5 md:mr-0 md:mt-0 fadeIn bg-cover bg-center md:bg-contain md:bg-no-repeat ld:h-[590px]" style={{backgroundImage: `url(${btcbutterfly})`}}>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 md:w-full bg-primary rounded-3xl p-10 md:p-8 ml-5 md:ml-0">
            <p className="text-secondary text-2xl">Now the technology is ready to replace the Internet of Corporations with the Internet of Peers.<br/><br/>To make this dream reality, there are obstacles to overcome. Self-sovereignty is hard, self-custody is hard - but they shouldn't be. Privacy, Security and Private Property are universal human rights and therefore shouldn't be limited only to those who are competent enough to provide for their own Digital Lives.<br/><br/>Nabi is a piece of the revolution. Our goal is to build the best personal controlnode in the world, so that everyone can easily join this revolution, as a Peer.<br/><br/>And you can be part of it, too.</p>
            <a href="https://bit.ly/3AReQQT" className="p-5 py-3 bg-[#5865F2] ml-5 md:ml-0 mt-5 rounded-3xl hover:bg-blue-500 text-white font-bold transition-all">Let’s talk on Discord</a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-8 first-letter:justify-center bg-primary items-center mx-auto min-h-[100px] fadeIn">
        <p className="text-secondary">Renders made by <a href="https://www.instagram.com/_matteocorra/" className="underline">Permeteo</a>.</p>
        <p className="text-secondary">Logo made by <a href="https://www.instagram.com/radiciannodate/" className="underline">Anna</a>.</p>
        <p className="text-secondary">Developed by <a href="https://twitter.com/enricosystem" className="underline">Enrico</a>.</p>
        <p className="text-secondary">Nabi Technology</p>
      </div>
    </>
  )
}