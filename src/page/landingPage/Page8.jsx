import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import dog from '../../image/Page8/dog.png';
// import ian from '../../image/Page8/ian.png';
// import xin from '../../image/Page8/xin.png';
import stark from '../../image/Page8/stark.png';
import SwirlImage from '../../image/Page8/swirl.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
            textShadow: '2px 4px black',
          }}
          className="text-white font-aldo text-6xl text-center"
        >
          Our Team
        </h1>
        {/* <div className="container">
          <Carousel autoPlay>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="dog"
                src={dog}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="ian"
                src={ian}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="xin"
                src={xin}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="stark"
                src={stark}
              />
            </div>
          </Carousel>
        </div> */}
        <img
          style={{
            position: 'relative',
            top: '20%',
            width: '80%',
            margin: 'auto',
            zIndex: '1',
          }}
          src={stark}
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
