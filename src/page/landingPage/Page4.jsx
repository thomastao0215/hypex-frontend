import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cardLeft from '../../image/Page4/cardLeft.png';
import cardRight from '../../image/Page4/cardRight.png';
import cardMiddle from '../../image/Page4/cardMiddle.png';
import SwirlImage from '../../image/Page4/swirl.png';
import BannerImage from '../../image/Page4/banner.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Page4(props) {
  const { isMobile } = props;
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
            top: isMobile ? '12%' : '7%',
            left: '0',
            zIndex: '100',
            height: '10%',
            width: '100%',
          }}
        >
          <div className="font-aldo">
            <div
              style={{
                margin: '0 auto',
                textShadow: '2px 4px black',
                padding: '0.3rem',
              }}
              className={`text-center ${isMobile ? 'text-2xl' : 'text-6xl'}`}
            >
              <p
                style={{
                  display: 'inline',
                }}
                className="text-white"
              >
                Metaverse for
                {' '}
              </p>
              <p
                style={{
                  display: 'inline',
                }}
                className="text-hypex-purple"
              >
                Sneaker lovers
              </p>
            </div>
            <p className="text-white text-2xl text-center">Benefits of the NFT</p>
          </div>
        </div>
        {
          isMobile ? (
            <div style={{
              display: 'block',
              position: 'absolute',
              top: '25%',
              left: '12vw',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '80vw',
              zIndex: '1000',
            }}
            >
              <Carousel
                infiniteLoop
                autoPlay
                interval="3000"
                width="100%"
                dynamicHeight
                showThumbs={false}
              >
                <div>
                  <img src={cardLeft} alt="ian" />
                </div>
                <div>
                  <img src={cardMiddle} alt="ian" />
                </div>
                <div>
                  <img src={cardRight} alt="ian" />
                </div>
              </Carousel>
            </div>
          )
            : (
              <img
                style={{
                  position: 'relative',
                  top: '25%',
                  height: '55%',
                  margin: 'auto',
                  zIndex: '1',
                  display: isMobile ? 'none' : 'block',
                }}
                src={BannerImage}
                alt="BannerImage"
              />
            )
        }
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
