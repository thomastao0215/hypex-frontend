import React from 'react';
import CardView from './page4/CardView';
import SwirlImage from '../../image/Page4/swirl.png';

export default function Page4() {
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
            top: '7%',
            left: '0',
            zIndex: '1',
            height: '10%',
            width: '100%',
          }}
        >
          <p className="text-white text-4xl text-center">Metaverse for Sneaker lovers</p>
          <p className="text-white text-xl text-center">Benefits of the NFT</p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            zIndex: '1',
            height: '70%',
            width: '90%',
            left: '5%',
          }}
          className="grid grid-cols-3 gap-2"
        >
          <CardView />
          <CardView />
          <CardView />
        </div>
        <img
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            zIndex: '0',
            width: '100%',
          }}
          src={SwirlImage}
          alt="swirl"
        />
      </div>

    </div>
  );
}
