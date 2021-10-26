import React from 'react';
import ShoeImage from '../../image/Page2/shoe.png';
import SwirlImage from '../../image/Page2/swirl.png';

export default function Page2() {
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
            right: '15%',
            zIndex: '1',
            height: '50%',
            width: '30%',
          }}
        >
          <p className="text-white">NFTs for</p>
          <div style={{
            margin: '0 auto',
          }}
          >
            <p
              style={{
                display: 'inline',
              }}
              className="text-purple-500"
            >
              real-world
              {' '}
            </p>
            <p
              style={{
                display: 'inline',
              }}
              className="text-white"
            >
              sneakers
            </p>
          </div>
          <p className="text-white">Everything in HypeX Metaverse will have a physical copy in the real world. Users can trade/collect NFTs to redeem the physical sneaker. It removes the authentication and delivery processes, thus, increasing the liquidity of the sneaker market.</p>
        </div>
        <img
          style={{
            position: 'absolute',
            top: '44%',
            left: '2.5%',
            height: '70vh',
            zIndex: '1',
          }}
          src={ShoeImage}
          alt="shoe"
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
