import React from 'react';
import CardsImage from '../../image/Page3/card3.png';
import SwirlImage from '../../image/Page3/swirl.png';

export default function Page3(props) {
  const { isMobile } = props;
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
            left: isMobile ? '' : '15%',
            zIndex: '1',
            height: '50%',
            width: isMobile ? '100%' : '30%',
            'text-align': isMobile ? 'center' : '',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              textShadow: '2px 4px black',
            }}
            className={`font-aldo ${isMobile ? 'text-3xl' : 'text-6xl'}`}
          >
            <p
              style={{
                display: 'inline',
              }}
              className="text-hypex-purple"
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
          <img
            style={{
              height: '90vw',
              zIndex: '1',
              display: isMobile ? 'block' : 'none',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            src={CardsImage}
            alt="cards"
          />
          <div style={{ textShadow: '2px 2px black', 'text-align': isMobile ? 'left' : '', padding: isMobile ? '1rem' : '' }} className={`text-white ${isMobile ? 'text-sm' : 'text-3xl'} text-alata `}>
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
            height: isMobile ? '25%' : '80vh',
            zIndex: '1',
            display: isMobile ? 'none' : 'block',
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
