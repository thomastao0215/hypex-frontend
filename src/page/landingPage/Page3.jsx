import React from 'react';
import CardsImage from '../../image/Page3/card3.png';
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
            top: '35%',
            left: '15%',
            zIndex: '1',
            height: '50%',
            width: '30%',
          }}
          className="font-aldo"
        >
          <div
            style={{
              margin: '0 auto',
            }}
            className="text-6xl"
          >
            <p
              style={{
                display: 'inline',
              }}
              className="text-purple-500"
            >
              FRACTIONALIZED
              {' '}
            </p>
            <p
              style={{
                display: 'inline',
              }}
              className="text-white"
            >
              NFTs
            </p>
          </div>
          <br />
          <div className="text-white text-3xl">
            <p>Want to own a pair of Air Mag?</p>
            <br />
            <p> HypeX offers fractionalized NFTs of physical sneakers.</p>
            <br />
            <p>Users can spend 1/100 of the original price to own and wear in the HypeX metaverse.</p>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            top: '30%',
            right: '7%',
            height: '80vh',
            zIndex: '1',
          }}
          className="hover-3d"
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
