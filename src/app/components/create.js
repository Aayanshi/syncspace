"use client"; 
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function create() {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('https://syncspace.com/register', {
        name,
        email,
        password, 
        confirmPassword,
      });

      // Check if the response status indicates success
      if (response.status >= 200 && response.status < 300) {
        // Redirect to login page after successful signup
        router.push('/pages/login');
      }
       else {
        // Handle unexpected response statuses
        setErrorMessage(' Signup failed. Please try again.');
      }
    } catch (error) {
      console.log('Signup error:', error.response?.data || error.message);
      setErrorMessage(error.response ? error.response.data.message : 'Signup failed. Please try again.');
    }
  };


  return(
      <div className =" signup-form container 
       md:container w-full pt-4 px-4 md:px-6">
        <h2 className="text-xl md:text-3xl font-bold text-black text-left">
            Create A Free Account
        </h2>
            <p className="text-[15px] text-black text-left mb-6 pt-2 px-4 md:px-0">
              To Access Sync Space Home
            </p> 

            {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSignup}>
          <div className="grid gap-2 sm:grid-cols-2">
            <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-[#bebebe] border bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf]
            text-black 
            " />
            <input type="text" 
            placeholder="Username" 
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border-[#bebebe] border   bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf]
            text-black"/>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 mt-2">

          <input type="password" placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-[#bebebe] border   bg-[#F4F4F4] text-black text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf]" />
          
          <input type="password" placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border-[#bebebe] border   bg-[#F4F4F4] text-black  text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf]" />
        </div>
         <div className="flex items-center mt-3 mb-2">
            <input
                type="checkbox"
                id="terms"
                className="custom-checkbox w-3 h-3  
                text-cyan-500 rounded  border-red-500 border-2    mr-1" required />
              <label
                htmlFor="terms"
                className=" text-sm md:text-sm  text-cyan-500"
              >
                I Agree To Tidio&apos;s{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                  Terms & Conditions
                </a>{' '}
                And{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                 Privacy Policy
                </a>
              </label>
          </div>
          <div className="mt-2 py-2 ">
          <button
              type="submit"
              className="bg-cyan-500 text-white text-base font-normal w-full p-5  rounded-md hover:bg-cyan-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
            >
              Get Started For Free
            </button>
          </div>
        </form>
      </div>
  )
}



