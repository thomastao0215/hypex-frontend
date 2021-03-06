import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import dog from '../../image/Page8/dog.png';
import ian from '../../image/Page8/ian.png';
import xin from '../../image/Page8/xin.png';
import stark from '../../image/Page8/stark.png';
import team from '../../image/Page8/team.png';
import SwirlImage from '../../image/Page8/swirl.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Page8(props) {
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
        <h1
          style={{
            position: 'relative',
            top: isMobile ? '15%' : '10%',
            height: '5%',
            width: '100%',
            textShadow: '2px 4px black',
          }}
          className={`text-white font-aldo text-center ${isMobile ? 'text-2xl' : 'text-6xl'}`}
        >
          Our Team
        </h1>
        {
          isMobile ? (
            <>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  height: '20%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                src={dog}
                alt="dog"
              />
              <div style={{
                display: 'block',
                position: 'absolute',
                top: '50%',
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
                    <img src={stark} alt="stark" />
                  </div>
                  <div>
                    <img src={ian} alt="ian" />
                  </div>
                  <div>
                    <img src={xin} alt="xin" />
                  </div>
                </Carousel>
              </div>
            </>
          )
            : (
              <>
                <img
                  style={{
                    position: 'relative',
                    top: '15%',
                    height: '30%',
                    margin: 'auto',
                    zIndex: '1',
                  }}
                  src={dog}
                  alt="dog"
                />
                <img
                  style={{
                    position: 'relative',
                    top: '18%',
                    width: '70%',
                    margin: 'auto',
                    zIndex: '1',
                  }}
                  src={team}
                  alt="team"
                />
              </>
            )
        }
        {/* <div className="container">
          <Carousel autoPlay>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="dog"
                src={dog}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="ian"
                src={ian}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="xin"
                src={xin}
              />
            </div>
            <div>
              <img
                style={{
                  position: 'relative',
                  top: '20%',
                  width: '80%',
                  margin: 'auto',
                  zIndex: '1',
                }}
                alt="stark"
                src={stark}
              />
            </div>
          </Carousel>
        </div> */}

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
