import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ActiveUserProvider = ({ children }) => {
  const AVATAR_URL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";
  const [activeUser, setActiveUser] = useState({
    id: 1,
    email: 'mustibatualp@gmail.com',
    username: "mustafaalparslan",
    fullName: "Mustafa Batuhan",
    avatar: AVATAR_URL,
    verified: false,
    bio: "Front-end :)",
    posts: [],
    following: ["Batuhan_"],
    followers: ["Batuhan_"],
  });
  const data = { activeUser, setActiveUser };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useActiveUser = () => useContext(Context);
