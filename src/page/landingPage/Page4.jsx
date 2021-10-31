import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import dog from '../../image/Page8/dog.png';
import ian from '../../image/Page8/ian.png';
import xin from '../../image/Page8/xin.png';
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
            zIndex: '1',
            height: '10%',
            width: '100%',
          }}
        >
          <div className="font-aldo">
            <div
              style={{
                margin: '0 auto',
                textShadow: '2px 4px black',
              }}
              className={`text-center ${isMobile ? 'text-3xl' : 'text-6xl'}`}
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
        {/* <div
          style={{
            position: 'absolute',
            top: '23%',
            zIndex: '1',
            height: '70%',
            width: '90%',
            left: '5%',
          }}
          className="grid grid-cols-3 gap-5"
        >
          <CardView title="GAMES" content="By playing games and completing INTERACTIVE tasks, users can earn DAILY rewards" />
          <CardView title="CRYPTO FEATURES" content="Users can stake NFTs to earn yields as well as deposit their NFTs for collateral loans" />
          <CardView title="AND MORE" content="" />
        </div> */}
        <br />
        <Carousel
          infiniteLoop
          autoPlay
          interval="2000"
          showThumbs={false}
          style={{
            top: '30%',
          }}
        >
          <div>
            <img src={ian} alt="ian" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={xin} alt="xin" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={dog} alt="dog" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
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
