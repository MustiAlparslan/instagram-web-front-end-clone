import { ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useActiveUser } from "../../../../context/userContext";
function EditProfile() {
  const {activeUser} = useActiveUser()
  const inputRef = useRef(null)
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const [form, setForm] = useState({
    phoneNumber: activeUser?.phoneNumber,
    username: activeUser?.username,
    fullName: activeUser?.fullName,
    bio: activeUser?.bio,
    email: activeUser?.email,
  });

  const classNames = {
    input: "border px-2  w-full rounded py-1",
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
       setImage(e.target.files[0]);
     }
   };
   
   const handleChangeAvatar =  () => {
     inputRef.current.click();
     console.log('cc')
   };


  const handleClick =  (e) => {
    e.preventDefault();
    
  };



  return (
    <section className="flex-1 overflow-auto ">
      <div className="m-auto max-w-[900px]  w-full  rounded mb-6  mt-6 bg-white flex border border-border  ">
        <ul className="min-w-[234px] max-w-[234px]  w-full  border-r border-border">
          <li className="w-full p-[16px_16px_16px_30px] font-semibold border-l-2 border-black">
            Edit profile
          </li>
        </ul>
        <article className="flex-1  h-full  flex-col pt-[32px] pb-2">
          <div className="flex  items-center justify-center w-[465px]">
            <div className="mr-8">
              <img src={`${activeUser?.avatar}`} width="38" />
            </div>
            <div>
              <div className="font-normal text-xl">{activeUser?.username}</div>
              <input
                style={{display: 'none'}}
                ref={inputRef}
                name="image"
                type="file"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className=" font-semibold text-primary_button text-sm"
                onClick={handleChangeAvatar}
              >
                Change profile photo
              </button>
              
            </div>
          </div>
          <form
            onSubmit={handleClick}
            className="flex flex-col w-full gap-6 mt-4 "
          >
            <div className="flex gap-2  ">
              <label
                htmlFor="name"
                className="font-semibold w-[194px] text-right pr-[32px]"
              >
                Name
              </label>
              <div className="flex-1 max-w-[355px]">
                <input
                  type="text"
                  value={form.fullName}
                  id="name"
                  className={classNames.input}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
                <p className="text-xs text-[#8e8e8e] mt-2">
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                  You can only change your name twice within 14 days.
                </p>
              </div>
            </div>

            <div className="flex gap-2 ">
              <label
                htmlFor="username"
                className="font-semibold w-[194px] text-right pr-[32px]"
              >
                Username
              </label>
              <div className="flex-1 max-w-[355px]">
                <input
                  type="text"
                  value={form.username}
                  id="username"
                  className={classNames.input}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
                <p className="text-xs text-[#8e8e8e] mt-2">
                  In most cases, you'll be able to change your username back to{" "}
                  {activeUser?.username} for another 14 days. Learn more
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <label
                htmlFor="Bio"
                className="font-semibold w-[194px] text-right pr-[32px] "
              >
                Bio
              </label>
              <div className="flex-1 max-w-[355px]">
                <textarea
                  type="text"
                  value={form.bio}
                  maxLength="150"
                  id="Bio"
                  className={classNames.input}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                />
                <div className="text-[#8e8e8e] text-xs ">
                  {form?.bio?.length} / 150{" "}
                </div>
                <p className="text-[#8e8e8e] mt-3">Personal information</p>
                <p className="text-xs text-[#8e8e8e] mt-1">
                  Provide your personal information, even if the account is used
                  for a business, a pet or something else. This won't be a part
                  of your public profile.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <label
                htmlFor="Email"
                className="font-semibold w-[194px] text-right pr-[32px]"
              >
                Email
              </label>
              <div className="flex-1 max-w-[355px]">
                <input
                  type="text"
                  value={form.email}
                  id="Email"
                  className={classNames.input}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <label
                htmlFor="phoneNumber"
                className="font-semibold w-[194px] text-right pr-[32px]"
              >
                Phone number
              </label>
              <div className="flex-1 max-w-[355px]">
                <input
                  type="text"
                  value={form.phoneNumber}
                  id="phoneNumber"
                  className="border px-2 w-full"
                  onChange={(e) =>
                    setForm({ ...form, phoneNumber: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="m-auto w-[290px]">
              <button
                type="submit"
                className="disabled:opacity-30 bg-primary_button font-semibold text-white rounded px-[9px] py-[5px] text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

export default EditProfile;
