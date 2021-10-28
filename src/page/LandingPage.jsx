import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './landingPage/Page1';
import Page2 from './landingPage/Page2';
import Page3 from './landingPage/Page3';
import Page4 from './landingPage/Page4';
import Page5 from './landingPage/Page5';
import Page6 from './landingPage/Page6';
import Page7 from './landingPage/Page7';
import Page8 from './landingPage/Page8';

export default function LandingPage() {
  return (
    <ReactFullpage
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Page1 />
          </div>
          <div className="section">
            <Page2 />
          </div>
          <div className="section">
            <Page3 />
          </div>
          <div className="section">
            <Page4 />
          </div>
          <div className="section">
            <Page5 />
          </div>
          <div className="section">
            <Page6 />
          </div>
          <div className="section">
            <Page7 />
          </div>
          <div className="section">
            <Page8 />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />

  );
}
