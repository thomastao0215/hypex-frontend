import React from 'react';
import CardImage from '../../image/Page2/card2.png';
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
            top: '20%',
            right: '15%',
            zIndex: '1',
            height: '50%',
            width: '30%',
          }}
          className="font-aldo"
        >
          <p className="text-white text-6xl">NFTs for</p>
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
          <br />
          <br />
          <div className="text-white text-2xl">
            <p>
              Everything in HypeX Metaverse will have a physical copy in the real world.
            </p>
            <br />
            <p>
              Users can trade/collect NFTs to redeem the physical sneaker.
            </p>
            <br />
            <p>
              It removes the authentication and delivery processes, thus, increasing the liquidity of the sneaker market.
            </p>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            height: '80vh',
            zIndex: '1',
          }}
          src={CardImage}
          alt="card"
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
