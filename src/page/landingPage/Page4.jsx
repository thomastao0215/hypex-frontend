import React from 'react';
// import CardView from './page4/CardView';
import SwirlImage from '../../image/Page4/swirl.png';
import BannerImage from '../../image/Page4/banner.png';

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
          <div className="font-aldo">
            <div
              style={{
                margin: '0 auto',
              }}
              className="text-6xl text-center"
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
        <img
          style={{
            position: 'relative',
            top: '25%',
            height: '55%',
            margin: 'auto',
            zIndex: '1',
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
