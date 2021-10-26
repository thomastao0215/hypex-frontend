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
            left: '10%',
            zIndex: '1',
          }}
        >
          <div className="text-white text-8xl font-aldo">
            <p className="text-white">
              Metaverse for
            </p>
            <p className="text-purple-500">
              Sneaker Lovers
            </p>
          </div>

          <Button text="EXPLORE" action={null} />
        </div>
        <img
          style={{
            position: 'absolute',
            top: '22%',
            right: '8%',
            height: '78vh',
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
