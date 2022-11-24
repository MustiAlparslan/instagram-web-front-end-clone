import React, { useState } from "react";
import Input from "../../Input";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Or from "../../Or";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const enable = email && username && fullName && password;
  
  const handleSubmit = async (e) => {
    e.preventDefault()
      navigate(location.state?.return_url || '/', {
        replace: true
      })
  }
  

  return (
    <div className="w-full h-full flex flex-wrap   overflow-auto items-center justify-center">
      <div className="w-[350px] my-[2rem]">
        <div className="p-[20px_40px]   bg-white border-[#dbdbdb] border">
          <a className="flex justify-center mb-[15px] mt-[30px] ">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </a>
          <div className="text-center text-[17px] text-[#8e8e8e] mb-4 font-semibold">
            Sign up to see photos and videos from your friends.
          </div>
          <a className="mb-[15px] flex justify-center gap-1 items-center  font-semibold w-full bg-[#0095f6] text-white text-sm  rounded h-[30px]">
            <AiFillFacebook size={19} />
            <span className="text-[14px]">Log in with Facebook</span>
          </a>
          <Or />
          <form onSubmit={handleSubmit} className="mt-4">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Phone number or email"
            />
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full name"
            />
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <p className="text-center text-[12px] text-[#8e8e8e] mt-3 mb-5">
              People who use our service may have uploaded your contact
              information to Instagram. <a className="font-semibold"> Learn More</a>
            </p>
            <p className="text-center text-[12px] text-[#8e8e8e] mb-5">
              By signing up, you agree to our Terms , <a className="font-semibold">Privacy</a> <a className="font-semibold">Policy</a> and <a className="font-semibold">Cookies Policy .</a>
              
            </p>
            <button
              type="submit"
              disabled={!enable}
              className="mb-[22px] disabled:opacity-50 font-semibold w-full bg-[#0095f6] text-white text-sm  rounded h-[30px]"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="mt-[10px] text-[14px] bg-white border-[#dbdbdb] h-[63px] border gap-x-1 flex items-center justify-center">
          Have an account?{" "}
          <Link to="/auth/login" className="font-semibold text-[#0095f6]">
            Log in
          </Link>
        </div>
      </div>
      </div>
  );
}

export default Register;
