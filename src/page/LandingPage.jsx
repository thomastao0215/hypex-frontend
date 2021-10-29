import React from 'react';
import Icon from '../image/HypeXWhite.png';
import background from '../image/landingBG.png';
import LandingPageContent from './LandingPageContent';
import SocialMediaBar from './landingPage/SocialMediaBar';

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
              left: '1%',
              height: '10vh',
              zIndex: '1000',
            }}
          />
        </span>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            height: 'auto',
            transform: 'translateY(-50%)',
            right: '1%',
            zIndex: '1000',
          }}
          className="align-middle"
        >
          <SocialMediaBar />
        </div>
      </div>
      <LandingPageContent />
    </div>

  );
}
