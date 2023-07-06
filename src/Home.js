import React, { useState } from 'react';
import axios from 'axios';	
import background from './img/cubit_white_box.jpg';
import newLogo from './img/new_logo.png';

export default function Home() {

  const sendgrid_apikey = process.env.REACT_APP_SENDGRID_API_KEY;

  const [user_email, setUserEmail] = useState('');
  const [errorInEmail, setErrorInEmail] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  function onChangeEmail(e) {
    setUserEmail(e.target.value);
  }

  function subscribe() {
    //check if the string user_email is a valid email
    if(user_email.includes('@') && user_email.includes('.')) {
      const data = {"contacts": [{"email": user_email}]};
      const headers = {
        'Authorization': sendgrid_apikey,
        'Content-Type': 'application/json'
      };
      axios.put('https://api.sendgrid.com/v3/marketing/contacts', data, { headers })
        .then(response => {
          setErrorInEmail(false);
          setEmailSubmitted(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setErrorInEmail(true);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={newLogo} className="absolute h-20 z-10 top-7 left-7" alt="nabi_logo"/>
      <img src={background} className='absolute top-0 w-screen h-screen object-cover blur' alt="cubit"/>
      <h2 className="text-primary text-3xl px-2 ld:text-4xl text-center z-10 mb-5">Welcome to the <i>new internet</i><br/>—one that’s powered by <i>you</i>.</h2>
      <div className="flex md:flex-col flex-row justify-center place-content-between w-screen bottom-0 ld:bottom-20 fixed px-5">
        <a href="https://geyser.fund/project/nabitechnology" className="text-primary text-3xl text-center z-10 mb-10 mr-[30%] md:mr-[0px] underline">Geyser crowdfounding</a>
        <div className="flex flex-col justify-center items-center z-10 ">
          <div className="flex flex-row justify-center">
            <input type="email" onChange={(e) => onChangeEmail(e)} className={`w-56 rounded-3xl pl-6 text-secondary ${errorInEmail ? 'bg-red-100' : 'bg-gray-100'}`} placeholder="Email address" />
            <button onClick={() => subscribe()} className="rounded-3xl font-bold p-3 px-4 ml-2 text-white bg-[#5865F2] hover:bg-blue-500 transition-all">Keep me updated!</button>
          </div>
          <p className={`text-primary text-center mt-5 z-10 ${emailSubmitted ? 'opacity-100' : 'opacity-0'} transition-all`}>You have successfully submitted your email address!</p>
        </div>
      </div>
    </div>
  );
  
}