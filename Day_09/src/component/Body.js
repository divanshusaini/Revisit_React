import { useEffect, useState } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);
  const [User,setUser]=useState("");
  async function generate(count) {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect( () => {
     generate(10);
  }, []);
  return (
    <div className="outer">
      <input type="text" className="input" placeholder="Search Here" value={User} onChange={(e)=>{setUser(e.target.value)}}/>
      <button onClick={()=>(generate(Number(User)))}>Search Profile</button>
    <div className="Profiles">
      {Profile.map((value) => {
        return (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt="" />
            <h2>Name:{value.login}</h2>
            <a href={value.html_url} target="_blank">
              Profile
            </a>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Body;
