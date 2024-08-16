import React from 'react';
import animation from '../assets/animation.gif';  // Replace with the correct path to your image

export default function ImagePage() {
  return (
    <div>
      <h1>Here's your image!</h1>
      <img src={animation} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}
