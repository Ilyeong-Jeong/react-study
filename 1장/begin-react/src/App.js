import React, { useRef, useState, useMemo, useCallback } from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''    
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs((inputs) => ({
        ...inputs,
        [name]: value,
      }));
    }, 
    []
  )

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

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextID.current,
        username,
        email
      };

      setUsers((users) => [...users, user]);

      setInputs({
        username: '',
        email: ''
      });
  
      nextID.current += 1;
    },
    [username, email]
  );

  const onRemove = useCallback(
    (id) => {
      setUsers((users) => users.filter(v => v.id !== id));
    },
    []
  );

  const onToggle = useCallback(
    (id) => {
      setUsers((users) => users.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user
      }))
    },
    []
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

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

      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;