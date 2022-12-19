import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import SmallPost from './components/SmallPost';

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
      <div className="flex flex-row w-full justify-center items-center mt-20 mb-10">
        <img className="mr-2 w-32" src={require("./img/logo.png")} alt="logo"/>
        <h1 className="text-secondary text-7xl">blog</h1>
      </div>
      <div className="max-w-[1390px] px-20 flex flex-col justify-center items-center w-screen mx-auto">
        <div className="w-full flex flex-row justify-between h-80 mb-20">
            <div className="w-2/3 overflow-hidden flex justify-center items-center rounded-2xl">
              <img className="object-fill" src="https://images.unsplash.com/photo-1510022151265-1bb84d406531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" alt="article-cover"/>
            </div>
            <div className="w-[25%] flex flex-col justify-center items-center">
                <h1 className="text-4xl text-secondary">Article Title</h1>
                <p className="text-secondary overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</p>
            </div>
        </div>
        <div className="flex flex-row justify-between mb-10 w-full">
          <div className="w-1/3 flex justify-center items-center">
            <SmallPost/>
          </div>
          <div className="w-1/3 flex justify-center items-center mx-10">
            <SmallPost/>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <SmallPost/>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col py-8 first-letter:justify-center bg-primary items-center mx-auto min-h-[100px] fadeIn">
        <p className="text-secondary">Founded by <a href="https://twitter.com/enricosystem" className="underline">Enrico</a>, <a href="https://twitter.com/permeteo" className="underline">Permeteo</a> and <a href="https://twitter.com/pippellia" className="underline">Pippellia</a>.</p>
        <p className="text-secondary">Logo made by <a href="https://www.instagram.com/radiciannodate/" className="underline">Anna</a>.</p>
        <p className="text-secondary">Nabi Technology</p>
      </div>
    </>
  )
}