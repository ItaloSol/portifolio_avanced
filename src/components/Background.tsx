import React from 'react';

const Background = () => {
  return (
    <>
      <div className="animation">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="code-lines" />
        ))}
      </div>
      <div className="stars" />
      <div className="planets" />
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="line"
          style={{ left: `${(i + 2) * 10}%` }}
        />
      ))}
    </>
  );
};

export default Background;