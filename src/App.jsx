import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const fetchProfile = async () => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );

    setUsers(data.data);
  };

  useEffect(() => {
    fetchProfile();
  }, [page]);

  const pageHander = () => {
    if (page < 2) {
      setPage((prev) => prev + 1);
      console.log(page);
    } else {
      alert("users is not found");
    }
  };
  const pagePrevHandler = () => {
    if (page!==1) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="app">
      <div className="navbar">
        <h1>LetsGrowMore</h1>
        <div className="btn">
          <button>Get User</button>
          {
            page!=2?<button onClick={pageHander}>Next</button>: <button onClick={pagePrevHandler}>Prev</button>
          }
        
         
        </div>
      </div>
      <div className="profile">
        {users.map((user) => (
          <ProfileCard
            email={user.email}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            imgUrl={user.avatar}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

const ProfileCard = ({ email, firstName, lastName, imgUrl, id }) => (
  <div className="profileCard">
    <img src={imgUrl} alt="" />
    <div className="about">
      <br></br>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  </div>
);
