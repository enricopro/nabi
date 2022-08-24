import { FaDiscord, FaTwitter } from 'react-icons/fa';
import handcuff from './img/handcuff.png';

export default function Discover() {
  return (
    <>
      <div className="w-screen flex flex-row items-center justify-between h-16 px-5 absolute top-0 fadeIn">
        <div className="flex flex-row text-secondary w-full items-center">
          <p>product by</p>
          <img className="ml-2 w-14" src={require("./img/logo.png")} alt="logo"/>
        </div>
        <div className="flex flex-row items-center">
          <a href="https://discord.gg/Kv7hyVFs" className="z-10">
            <FaDiscord size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
          <a href="https://discord.gg/Kv7hyVFs" className="z-10">
            <FaTwitter size={22} className="text-secondary mx-2 hover:text-gray-300 transition-all"/>
          </a>
        </div>
      </div>
      <div className="w-11/12 max-w-[1390px] flex flex-col mx-auto mt-10 fadeIn">
        <div className="w-full flex flex-row bg-black tracking-tighter min-h-[490px] justify-between items-center">
          <div className="flex flex-col items-center justify-center w-1/2 bg-primary rounded-3xl p-10 h-full mr-5">
            <h2 className="text-secondary text-3xl font-semibold">What is a <span className="text-slate-300">controlnode</span>?</h2>
            <br/>
            <p className="text-secondary text-2xl font-semibold px-8">A controlnode is a single point of control over some parts of your digital life.<br/>
            The three pillars of your digital life are your data, your identity and your connections.<br/><br/>You can be either aware or unaware, but everyone has at least one controlnode.<br/><br/>You can own it, or you can rent it - which really means that someone else owns it.</p>
          </div>
          <div className="w-1/2 rounded-3xl ml-5 fadeIn" style={{backgroundImage: `url(${handcuff})`}}>
          </div>
        </div>
      </div>
    </>
  )
}