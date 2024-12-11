"use client"; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState(''); // Fixed from setUsername to setEmail
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to display error message
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await axios.post('https://syncspace.com/login', 
        { email, password }, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,  // This ensures that cookies or credentials are sent
        }
      );

      if (response.data.is_admin)  {
        alert("You are logged in as Admin");
        // router.push('/pages/user-dashboard');
      } else {
        alert("You are logged in");
      }

      // Optionally, store the token for future requests
      localStorage.setItem('token', response.data.token);

    } catch (error) {
      console.log('Login error:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center pt-4 px-4 md:px-0">
      <div className="w-full rounded-lg md:px-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-black text-left ">
          Log In
        </h2>
        <p className="text-[15px] text-black text-left mb-6 py-2">
          To Access Sync Space Home
        </p>

        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mt-2 " >
            <input
              type="email"
              placeholder="Email Address Or Mobile Number"
              className="border-[#bebebe] border bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf] text-black"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div className="mt-2">
            <input
              type="password"
              placeholder="Password"
              className="border-[#bebebe] border  bg-[#F4F4F4] text-[15px] p-3 md:py-6 md:px-2 w-full rounded-sm focus:outline-none focus:border focus:border-[#bfbfbf] text-black"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <div className="mt-2 mb-2 text-left">
            <span className="text-cyan-500 text-sm md:text-sm cursor-pointer hover:underline">
              Forgot password?
            </span> 
          </div>

          <div className="mt-2 py-1">
            <button
              type="submit"
              className="bg-cyan-500 text-white text-sm text-30px font-medium w-full p-5 md:p-6 rounded-sm hover:bg-cyan-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// "use client"; 
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function Login() {
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://syncspace.com/login', {
//         email,
//         password,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,  // This ensures that cookies or credentials are sent
//       }
//     );

//       if (response.data.is_admin)  {
//         // router.push('/pages/user-dashboard');
//         alert("You are login");
//       }
//       else{
//         alert("You are login");
//       }

//       // Optionally, store the token for future requests
//       localStorage.setItem('token', response.data.token);

//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center  px-4 md:px-0">
//             <div className="w-full max-w-md rounded-lg md:p-6 ">
//                 <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-left mb-4 ">
//                     Login
                    
//                 </h2>
//                     <p className="text-sm text-gray-800 text-left mb-6 py-2">
//                     To Access Sync Space Home
//                     </p>

//                 <form>
//                     <div>
//                         <input
//                             type="email"
//                             placeholder="Email Address or mobile number"
//                             className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf] text-black"
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="border border-[#bfbfbf00] bg-[#F4F4F4] text-base p-3 md:p-4 w-full rounded-md focus:outline-none focus:border focus:border-[#bfbfbf]  text-black"
//                         />
//                     </div>
//                     <div className="mt-2 text-left">
//                         <span className="text-cyan-500 text-xs md:text-sm cursor-pointer hover:underline">
//                             Forgot password?
//                         </span>
//                     </div>
//                     <div className="mt-6">
//                         <button
//                            onClick={handleLogin}
//                             type="submit"
//                             className="bg-cyan-500 text-white text-sm md:text-base w-full p-4 md:p-2 rounded-md hover:bg-cyan-600 transition duration-300"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//   );
// }