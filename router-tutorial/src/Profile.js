import React from 'react';

const profileData = {
  woochi: {
    name: '전우치',
    description:
      '전래동화의 주인공 전우치'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공 홍길동'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;