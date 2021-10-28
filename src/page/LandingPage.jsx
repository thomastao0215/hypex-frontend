import React from 'react';
import Icon from '../image/HypeXWhite.png';
import background from '../image/landingBG.png';
import LandingPageContent from './LandingPageContent';

export default function LandingPage() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
    }}
    >
      <div style={{
        overflow: 'auto',
      }}
      >
        <span>
          <img
            src={Icon}
            alt="icon"
            style={{
              position: 'absolute',
              top: '0',
              left: '2',
              height: '8vh',
              zIndex: '1000',
            }}
          />
        </span>
      </div>
      <LandingPageContent />
    </div>

  );
}
