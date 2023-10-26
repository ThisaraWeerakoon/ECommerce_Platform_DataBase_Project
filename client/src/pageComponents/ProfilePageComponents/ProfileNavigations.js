import React from 'react';
import './Profile_Navigations.css';
import ButtonSet from '../ProfilePageComponents/ButtonSet';

export default function ProfileNavigations() {
  return (
    <div className='profile-navigation'>
      <div className='order-report'>
        <p>order report</p>
      </div>
      
      <ButtonSet /> {/* Place the ButtonSet component inside the profile-navigation */}
    </div>
  );
}
