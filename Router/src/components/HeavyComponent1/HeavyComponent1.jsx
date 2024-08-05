import React from 'react';

const HeavyComponent1 = () => {
  return (
    <div>
      <h1>Heavy Component 1</h1>
      <p>This is a heavy component with large content.</p>
      {Array.from({ length: 100 }, (_, index) => (
        <p key={index}>This is some large content to simulate a heavy component.</p>
      ))}
    </div>
  );
};

export default HeavyComponent1;
