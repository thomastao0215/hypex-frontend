import React from 'react';
import CardsImage from '../../image/Page3/cards.png';
import SwirlImage from '../../image/Page3/swirl.png';

export default function Page3() {
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
            left: '15%',
            zIndex: '1',
            height: '50%',
            width: '30%',
          }}
        >
          <p className="text-white">FRACTIONALIZED NFTs</p>
          <p className="text-white">Want to own a pair of Air Mag? HypeX offers fractionalized NFTs of physical sneakers. Users can spend 1/100 of the original price to own and wear in the HypeX metaverse.</p>
        </div>
        <img
          style={{
            position: 'absolute',
            top: '30%',
            right: '2.5%',
            height: '70vh',
            zIndex: '1',
          }}
          src={CardsImage}
          alt="cards"
        />
        <img
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            height: '120vh',
            zIndex: '0',
          }}
          src={SwirlImage}
          alt="swirl"
        />
      </div>

    </div>
  );
}
