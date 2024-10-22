// src/Registration.js

import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm"; // Import the registration form component
import ListCard from "./ListCard"; // Import the ListCard component for displaying registered users

const Registration = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchSerial, setSearchSerial] = useState('');

  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  // Filter profiles based on the serial number
  const filteredProfiles = profiles.filter(profile => 
    searchSerial === '' || profile.id.toString() === searchSerial
  );

  return (
    <>
      <RegistrationForm addProfile={addProfile} />

      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <input 
          type="number" 
          placeholder="Search by Serial No" 
          value={searchSerial} 
          onChange={(e) => setSearchSerial(e.target.value)} 
        />
      </div>

      <div className="profiles-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {filteredProfiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
    </>
  );
};

export default Registration;
