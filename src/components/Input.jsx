import React, { useEffect, useState } from "react";

function Input({label,type = "text" ,...props}) {
  const [show, setShow] = useState(false)
  const [inputType, setType] = useState(type)

  useEffect(() => {
    if(show){
        setType("text")
    }else if (type === "password"){
        setType("password")
    }
  },[show])
  

  return (
    <label className="relative  mb-2 flex items-center bg-zinc-50 border rounded-sm focus-within:border-gray-400 ">
      <input
        required={true}
        type={inputType}
        className="bg-[#fafafa] m-0 valid:pt-[20px]  text-[12px]  w-full  px-2 outline-none  h-9 p-[9px_0_7px_8px] peer"
        {...props}        
      />
      <small className="text-xs cursor-text pointer-events-none text-gray-500 absolute top-1/2 left-[9px] -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 ">
        {label}
      </small>
      {type === 'password' && props?.value && (
        <div type="button" onClick={() => setShow(show => !show)} className="cursor-pointer  select-none h-full pr-2 text-sm font-semibold">
            {show ? 'Hide' : 'Show'}
        </div>
      )}
    </label>
  );
}

export default Input;
