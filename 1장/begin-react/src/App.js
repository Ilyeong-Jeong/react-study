import React, { useRef, useState } from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''    
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextID = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextID.current,
      username,
      email
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextID.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter(v => v.id !== id));
  }

  const onToggle = (id) => {
    setUsers(users.map((user) => {
      return user.id === id ? { ...user, active: !user.active } : user
    }))
  }

  return (
    <>
      <CreateUser
        username={ username }
        email={ email }
        onChange={ onChange }
        onCreate={ onCreate }
      />

      <UserList 
        users={ users } 
        onRemove={ onRemove } 
        onToggle={ onToggle }
      />
    </>
  );
}

export default App;