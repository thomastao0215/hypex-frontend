import React from 'react';
import TeamImage from '../../image/Page8/team.png';
import SwirlImage from '../../image/Page8/swirl.png';

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
          className="text-white font-aldo text-6xl text-center"
        >
          Our Team
        </h1>
        <img
          style={{
            position: 'relative',
            top: '20%',
            height: '55%',
            margin: 'auto',
            zIndex: '1',
          }}
          src={TeamImage}
          alt="team"
        />
        <img
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100vh',
            zIndex: '0',
          }}
          src={SwirlImage}
          alt="swirl"
        />
      </div>
    </div>
  );
}
