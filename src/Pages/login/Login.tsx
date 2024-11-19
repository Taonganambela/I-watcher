import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <div className="flex">
      {/* <div> */}
          <div className="bg-red w-full full hidden sm:block md:block  ">
        <div className=" items-center justify-center h-screen flex">
          <div className="text-center">

          {/* <img src="/homicon.svg" alt="Homicon"  className="h-[340px]"/> */}
          <img src="/eyes.svg" alt="House" className="h-[300px]" />
          {/* <p className="text-white p-2 text-xl font-semibold ">Let's find your dream home</p> */}
          <p className="text-4xl text-white font-semibold text-">WATCH.IO</p>
          </div>
          
        </div>
      </div>
      {/* </div> */}
    {/* <div className="text-center">
          <p>Welcome back</p>
        </div> */}

      <div className="bg-white w-full h-lvh"> 

      <form onSubmit={handleSubmit} className="items-center h-screen justify-center flex-col flex gap-4">
      <div className="">
        <div className="center-items justify-center flex">
            {/* <img src="/houseicon.PNG" alt="House" className="h-[100px]" /> */}
            {/* <img src="/eye.gif" alt="House" className="h-[100px]" /> */}
        </div>
        <div className="pb-3">
          <p className="text-3xl font-semibold">Welcome back</p>
          <p className="text-[12px] font font-semibold">Login to your account</p>
        </div>
        
        <label htmlFor="email" className="text-[14px] font-semibold">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 outline-none hover:border-blue border-2 border-blue h-[50px] w-[400px] rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-[14px] font-semibold">Password</label>
        <br />
        <input
          className="p-2 outline-none border-2 h-[50px] w-[400px] border-blue rounded-md"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* <div className="flex gap-2 items-start text-left">
        <input type="checkbox" /> 
        <p className="text-xs">remember me</p>
        
      </div> */}

      <div className="space-y-2">
        <button type="submit" className="  text-white font-semibold h-[50px] w-[400px] bg-blue rounded-md">Submit</button>
        <p className="text-xs font-semibold">Don't have an account?<span className="text-blue cursor-pointer hover:underline"> Sign Up </span> </p>
      </div>
    </form>
        
        </div>
    </div>
  );
};