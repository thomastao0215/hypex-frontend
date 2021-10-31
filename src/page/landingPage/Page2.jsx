import React from 'react';
import CardImage from '../../image/Page2/card2.png';
import SwirlImage from '../../image/Page2/swirl.png';
import '../../css/animation.css';

export default function Page2(props) {
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
            top: '20%',
            right: isMobile ? '' : '15%',
            zIndex: '1',
            height: '50%',
            width: isMobile ? '100%' : '30%',
            'text-align': isMobile ? 'center' : '',
          }}
        >
          <div className={`font-aldo ${isMobile ? 'text-3xl' : 'text-6xl'} mb-4`}>
            <p className="text-white">NFTs for</p>
            <div
              style={{
                margin: '0 auto',
                textShadow: '2px 4px black',
              }}
            >
              <p
                style={{
                  display: 'inline',
                }}
                className="text-hypex-purple"
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

          </div>

          <br />
          <br />
          <div
            className="img"
            style={{
              'text-align': isMobile ? 'center' : '',
            }}
          >
            <img
              style={{
                width: '70vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: isMobile ? '' : 'none',
              }}
              className="hover"
              src={CardImage}
              alt="card"
            />
          </div>
          <div style={{ textShadow: '2px 2px black', 'text-align': isMobile ? 'left' : '', padding: isMobile ? '1rem' : '' }} className={`text-white ${isMobile ? 'text-sm' : 'text-2xl'} text-alata `}>
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
            top: '30%',
            left: '13%',
            height: '65vh',
            zIndex: '1',
            display: isMobile ? 'none' : 'block',
          }}
          className="hover"
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
