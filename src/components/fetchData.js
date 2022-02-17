import React, { useState, useEffect } from 'react';

//CSS
import './fetchData.css'


const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = ({handleClick}) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='user-container'>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} onClick={() => handleClick(user)}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
};

export default UseEffectFetchData;
