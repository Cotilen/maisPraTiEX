import React from 'react';

const HeavyComponent2 = () => {
  return (
    <div>
      <h1>Heavy Component 2</h1>
      <p>This is another heavy component with large content.</p>
      {/* Simulate large content */}
      {Array.from({ length: 100 }, (_, index) => (
        <p key={index}>This is some more large content to simulate a heavy component.</p>
      ))}
    </div>
  );
};

export default HeavyComponent2;
