import { createContext, useContext, useState } from "react";

const Context = createContext();
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
        id: 1,
        username : 'Batuhan_',
        fullName: 'Mustafa Alparslan',
        avatar: 'https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg',
        post: 'https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '15.11.2022',
        like : 12,
        comments: 1,
        des: 'post'
    },
    {
      id: 2,
      username : 'Mustyalparslan',
      fullName: 'Mustafa Alparslan',
      avatar: 'https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg',
      post: 'https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      date: '15.11.2022',
      like : 12,
      comments: 1,
      des: 'post'
  },
      {
        id: 3,
        username : 'Batuhan_',
        fullName: 'Mustafa Alparslan',
        avatar: 'https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg',
        post: 'https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: '15.11.2022',
        like : 12,
        comments: 1,
        des: 'post'
    },
    {
      id: 4,
      username : 'Batuhan_',
      fullName: 'Mustafa Alparslan',
      avatar: 'https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg',
      post: 'https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      date: '15.11.2022',
      like : 12,
      comments: 1,
      des: 'post'
  },
    
  ]);
  const data = { posts, setPosts };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const usePost = () => useContext(Context);