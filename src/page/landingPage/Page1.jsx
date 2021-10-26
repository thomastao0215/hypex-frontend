import React from 'react';
import Airmag from '../../image/Page1/airmag.png';
import SwirlImage from '../../image/Page1/swirl.png';
import Button from '../../components/Button';

export default function Page1() {
  return (
    <div className="h-screen">
      <div style={{
        position: 'relative',
        top: '0',
        right: '0',
        height: '50%',
      }}
      >
        <div
          style={{
            position: 'absolute',
            top: '43%',
            left: '7%',
            zIndex: '1',
          }}
        >
          <p className="text-white text-6xl">Metaverse for Sneaker Lovers</p>
          <Button text="Start Now" action={null} />
        </div>
        <img
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            height: '75vh',
            zIndex: '1',
          }}
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
