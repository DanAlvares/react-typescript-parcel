import React from 'react'
import FirebaseDemo from './FirebaseDemo'
import tech from './assets/images/image.jpg';

export const App = () => (
  <div className="text-center">
    <picture>
      <img src={tech} alt="React TypeScript Parcel" style={{ maxWidth: '100%' }} />
    </picture>
    <FirebaseDemo />
  </div>
)
