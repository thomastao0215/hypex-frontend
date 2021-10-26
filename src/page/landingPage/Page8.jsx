import React from 'react';
import TeamImage from '../../image/Page8/team.png';

export default function Page8() {
  return (
    <div className="h-screen">
      <div style={{
        position: 'relative',
        top: '0',
        right: '0',
        height: '100%',
      }}
      >
        <h1
          style={{
            position: 'relative',
            top: '10%',
            height: '5%',
            width: '100%',
          }}
          className="text-white text-4xl text-center"
        >
          Our Team
        </h1>
        <img
          style={{
            position: 'relative',
            top: '13%',
            height: '35%',
            margin: 'auto',
          }}
          src={TeamImage}
          alt="team"
        />
        <h1
          style={{
            position: 'relative',
            top: '18%',
            height: '5%',
            width: '100%',
          }}
          className="text-white text-4xl text-center"
        >
          Our Partner
        </h1>
      </div>
    </div>
  );
}
