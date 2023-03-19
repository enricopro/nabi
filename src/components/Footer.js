import { FaDiscord, FaTwitter, FaNewspaper, FaGithub} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full flex flex-col py-8 first-letter:justify-center bg-primary items-center mx-auto min-h-[100px] fadeIn">
      <div className="w-full flex flex-row justify-center mb-6">
        <a href="https://bit.ly/3AReQQT">
          <FaDiscord size={35} className="text-secondary mx-4 hover:text-gray-300 transition-all"/>
        </a>
        <a href="https://bit.ly/3RxlxhW">
          <FaTwitter size={35} className="text-secondary mx-4 hover:text-gray-300 transition-all"/>
        </a>
        <a href="https://nabi.blog.technology">
          <FaNewspaper size={35} className="text-secondary mx-4 hover:text-gray-300 transition-all"/>
        </a>
        <a href="https://github.com/enricopro">
          <FaGithub size={35} className="text-secondary mx-4 hover:text-gray-300 transition-all"/>
        </a>
      </div>
      <p className="text-secondary">Founded by <a href="https://twitter.com/enricosystem" className="underline">Enrico</a>, <a href="https://twitter.com/permeteo" className="underline">Permeteo</a> and <a href="https://twitter.com/pippellia" className="underline">Pippellia</a>.</p>
      <p className="text-secondary">Logo made by <a href="https://www.instagram.com/radiciannodate/" className="underline">Anna</a>.</p>
      <p className="text-secondary">Nabi Technology</p>
    </div>  
  )
}