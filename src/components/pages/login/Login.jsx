import React, { useRef, useEffect, useState } from "react";
import Input from "../../Input";
import Or from "../../Or";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../context/userDataContext";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const ref = useRef();
  const {setUserData} = useUserData()


  const [formData,setFormData] = useState({
    username: '',
    password: ''
  })
    

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];

  const enable = formData.username  && formData.password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUserData(true)
    navigate('/', {replace: true})
  }
  // flex items-center justify-center
  return (
    <div className="w-full h-full flex flex-wrap mt-2  overflow-auto items-center justify-center">
      <div className="hidden md:block mr-[32px] relative w-[380px] h-[581px] bg-strokeLinecap bg-[length:468.32px_634.15px] bg-no-repeat bg-[top_left_-46px] bg-hero">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px] "
          ref={ref}
        >
          {images.map((image, key) => (
            <img
              key={key}
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* h-[396px] */}

      <div className="w-[350px] h-[555px] ">
        <div className="p-[20px_40px]   bg-white border-[#dbdbdb] border">
          <a className="flex justify-center mb-[31px] mt-[30px] ">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </a>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              label="Phone number, username or email"
            />
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              label="Password"
            />
            <button
              type="submit"
              disabled={!enable}
              className="mb-[22px] disabled:opacity-50 font-semibold w-full bg-[#0095f6] text-white text-sm  rounded h-[30px]"
            >
              Log In
            </button>
            <Or />
            <a className="flex gap-x-1 justify-center items-center mt-[28px] text-sm font-semibold text-facebook">
              <AiFillFacebook size={19} />
              <span className="text-[14px]">Log in with Facebook</span>
            </a>
            <a className="mt-[20px] flex items-center justify-center text-link text-[12px]  ">
              Forgot Password?
            </a>
          </form>
        </div>


        <div className="mt-[10px] text-[14px] bg-white border-[#dbdbdb] h-[63px] border gap-x-1 flex items-center justify-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-semibold text-[#0095f6]">
            {" "}
            Sign up{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
