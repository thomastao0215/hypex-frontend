import React from 'react';
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
            <p className="text-hypex-purple">
              Sneaker Lovers
            </p>
          </div>

          <Button text="EXPLORE" action={null} />
        </div>
        <img
          style={{
            position: 'absolute',
            top: '50%',
            right: '8%',
            height: '55vh',
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
