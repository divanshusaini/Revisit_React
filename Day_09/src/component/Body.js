import { useEffect, useState } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);

  async function generate() {
    const response = await fetch("https://api.github.com/users?per_page=10");
    const data = await response.json();
    setProfile(data);
  }

  useEffect( () => {
     generate();
  }, []);
  return (
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
  );
}

export default Body;
