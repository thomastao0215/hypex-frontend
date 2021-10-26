import React from 'react';
import Page1 from './landingPage/Page1';
import Page2 from './landingPage/Page2';
import Page3 from './landingPage/Page3';
import Page4 from './landingPage/Page4';
// import Page5 from './landingPage/Page5';
// import Page6 from './landingPage/Page6';
// import Page7 from './landingPage/Page7';
import Page8 from './landingPage/Page8';
import background from '../image/landingBG.png';
import Icon from '../image/HypeXWhite.png';

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
      <div style={{
        overflow: 'auto',
        height: '100%',
      }}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        {/* 4: ecosystem */}
        <Page4 />
        {/* 5: mystery box */}
        {/* <Page5 /> */}
        {/* 6: tokenomics */}
        {/* <Page6 /> */}
        {/* 7: road map */}
        {/* <Page7 /> */}
        {/* 8: team */}
        <Page8 />
      </div>
    </div>
  );
}
