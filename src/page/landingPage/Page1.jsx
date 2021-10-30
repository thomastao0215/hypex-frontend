import React from 'react';
import { isMobile } from 'react-device-detect';
import Airmag from '../../image/Page1/airmag.png';
import SwirlImage from '../../image/Page1/swirl.png';
import Button from '../../components/Button';
import '../../css/animation.css';

export default function Page1() {
  return (
    <div className="h-screen">
      <div style={{
        position: 'relative',
        top: '0',
        right: '0',
        height: '100%',
      }}
      >
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '25%' : '35%',
            left: isMobile ? '50%' : '10%',
            transform: isMobile ? 'translateX(-50%)' : 'none',
            zIndex: '1',
            width: 'fit-content',
            textShadow: '2px 4px black',
          }}
        >
          <div className={`text-white font-aldo ${isMobile ? 'text-4xl' : 'text-8xl'} mb-4`}>
            <p className="text-white">
              Metaverse for
            </p>
            <p className="text-hypex-purple">
              Sneaker Lovers
            </p>
          </div>
          <div style={isMobile ? {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } : null}
          >
            <Button text="COMING SOON" action={null} />
          </div>

        </div>
        <img
          style={{
            position: 'absolute',
            top: isMobile ? '57%' : '30%',
            right: isMobile ? '7%' : '10%',
            height: isMobile ? '25%' : '55%',
            zIndex: '1',
          }}
          className="hover"
          src={Airmag}
          alt="glove"
        />
        <img
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
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
