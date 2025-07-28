import React from 'react';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home">
<img src={profilePic} alt="MALLIKA M" className="profile-pic" />
<h1>MALLIKA M</h1>
    </section>
  );
};

export default Home;
