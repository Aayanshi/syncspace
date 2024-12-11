// signup
const Signup=()=>{
    return(
        <div >
            <form>
                <div>
                    <input type="text" placeholder="Email Address or mobile number" className="bg-slate-100 text-sm p-4  w-full" />
                </div>
                <div className="mt-2">
                    <input type="text" placeholder="Password" className="bg-slate-100 text-sm p-4  w-full" />
                </div>
                <span className="text-cyan-500 text-[12px]">Forgot password?</span>
                <div>
                    <button className="bg-[#1AB6CF] text-white w-full p-4">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;



// "use client"; 
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function Signup() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const router = useRouter();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       const response = await axios.post('https://urlpt.technians.in/register/', {
//         username,
//         email,
//         password, 
//         confirmPassword,
//       });

//       // Check if the response status indicates success
//       if (response.status >= 200 && response.status < 300) {
//         // Redirect to login page after successful signup
//         router.push('/pages/login');
//       }
//        else {
//         // Handle unexpected response statuses
//         setErrorMessage('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Signup error:', error.response?.data || error.message);
//       setErrorMessage(error.response ? error.response.data.message : 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2>Signup</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }






















// "use client"; 
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://urlpt.technians.in/login/', {
//         username,
//         password,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,  // This ensures that cookies or credentials are sent
//       }
//     );

//       if (response.data.is_admin) {
//         router.push('/pages/admin-dashboard');
//       } else {
//         router.push('/pages/user-dashboard');
//       }

//       // Optionally, store the token for future requests
//       localStorage.setItem('token', response.data.token);

//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }