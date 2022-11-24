import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Posts() {
  const Svg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.2"
        viewBox="0 0 91 77"
        width="91"
        height="77"
      >
        <defs>
          <image
            width="62"
            height="62"
            id="img1"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAAXNSR0IB2cksfwAAAJlQTFRF+vr67u7uvb29lpaWcnJyVFRUQkJCNjY2Kysr3NzckZGRJycnJiYmR0dHYWFha2tr+fn5sbGxQEBAdnZ2rKys2djY9vb2+vr6pqamfX19zs7OT09PPDw8np6e8PDwhYWFMDAw4eHh+fn5ioqK8vLy1dXV6urqbm5utbW1gYGBycnJ7u7uxsbGSkpK5eXlW1pbZ2Zn3NzcwcHBPITVZwAAADN0Uk5TAAD/////////4P///////wD/////////////////////////////////////////////8qnr+AAAAx5JREFUeJylV+maqjAMrWztQEBFFtm0wLiMjo7j+z/cBRVIh6Lej/MLQg9Nm5OkJUSOiaJqukEZo4auqcpkYJgUH6ZuATDbmWra1LEZgKWbH+9xZ3MdwF14fhA+EPjewgXQ57PX5KUBNIrDHuKIgrF88YM4gTRb9ck1VlkKSfxs6jVwNZCTb6tQOawHHZg44OTD5ApFXg0ZiIJvQ1k8Zdc/KMH2ZWyFM+8VuYbHuCJhW6lkv2WIU6vH93n6fNkIecr/+D+x2Ztz3+ZntrB/MwfeWncDDxwcvzWU/8MOwxLWHTsG52XERBQOtPqbJVy6bZ/+poL/KfuW86RxfwmqZMBWq5K2hqVtJZ9VWD4mN1KJznMDdtkNOzAkzgWpcZ9+Dln/q5+yffO8Z6nfG1BkML/RddrL0DzjXOleFc6zngMrqtfsD4iwdfuVsKo6JRts3CRV7WLJl7AJEdT1ywSstwOFZKeZyp9AFoqp7RKgB2SLwax9d5Hp6NLv3jJbfFP3iF7dyvuJtUCWDPYC4XgUXvfCLi+sCVEEte848no/5QB8in5Y8B0a7IFCVMBB0U/t4/kH+GW9vnD4ObfGk44G+6ASjQVS+m8Ki5vnxwWkv1J6wDSi23hxLT04WZ1srFMzhUAPbZ0YjoxeaQqlcNnumEh3DEKn0tldG60psJvgivQpJUyT0TdgYrMJGxldYwP0PSjYrDRy6NHlznsgiO+7EUfPefnWXWGOzXO4yujV1skDtxWkXMlzK6NXgRuQjcOQGH3WuNiTzYBoD6B3pwsdmkTtiVZMmU60JTgPqZ+dTkICvU4ZMWE7ehEBzfKiyDMKUSGl1wkrlguUceHcqCsUgIGCINDrciEWqwtFn4NrqWnlFW8tvXTP92IllEqx8PUQYy3fS6VQqH95cpbQHjgnvM38plCLbcKzaJQtpcgiaqEoNW1CbFKH5NHaerCsBNXptkn9bZGrTSzFRmhGbYscbNDPgBr0yOPB2MPJ2KPRbNzBbOyxkJDrqEPp2CPx2AP5O9eB8Ml1gMzGXUbIyKsQGXsRIyOvgTeMuYTe8eYV+B/oRQuOrkFdVAAAAABJRU5ErkJggg=="
          />
        </defs>
        <use id="Background" href="#img1" x="18" y="8" />
      </svg>
    );
  };
  // const [{ username, uuid, like, comment, post }] = localStorage.getItem("post")
  //   ? JSON.parse(localStorage.getItem("post"))
  //   : [];
    const username = "Aykut"
    const uuid = ""
    const like = 2
    const comments = 5
    const post = "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2lhbCUyMG1lZGlhfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"


    // const {username} = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')): []
    // const navUsername = useSelector((state) => state.navUser.username);
    const location = useLocation()
    
    const styled =  {
      post: {
        backgroundImage: `url(${post})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    };
    const pathUser = location.pathname
    const isUser =  pathUser.substring(1).slice(0,-1)
    
  return (
    <div>
      {username != isUser? (
        <div className="flex items-center h-[286px] flex-col justify-center  ">
          <div>
            <Svg />
          </div>
          <div className="text-center">
            <h3 className="text-[28px] mb-2 font-light">Share Photos</h3>
            <p className="text-sm">
              When you share photos, they will appear on your profile.
            </p>
            <a
              type="button"
              className="text-[#0095f6] text-sm mt-4 font-semibold"
            >
              Share your first photo
            </a>
          </div>
        </div>
      ) : (
        <div className="flex w-full gap-[28px] flex-wrap ">
          <div className="w-[293px] h-[293px]" style={styled.post}></div>
        </div>
      )}
    </div>
  );
}
