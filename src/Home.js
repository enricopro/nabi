import { FaDiscord } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-screen flex flex-row items-center justify-between h-16 px-5">
      <p className="text-secondary">LOGO</p>
      <a href="https://discord.gg/Kv7hyVFs" className="w-29 h-10 bg-sky-600 hover:bg-sky-700 flex flex-row items-center px-2 pr-4 rounded-md transition-all">
        <FaDiscord className="text-secondary w-10"/>
        <p className="text-secondary text-s">Join our Discord</p>
      </a>  
    </div>
    
  )
}