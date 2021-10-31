import React from 'react';
import CardImage from '../../../image/Page4/card-four.png';

export default function CardView({ title, content }) {
  return (
    <div style={{
      position: 'relative',
    }}
    >
      <img
        style={{
          margin: 'auto',
          zIndex: '0',
        }}
        src={CardImage}
        alt="swirl"
      />
      <div
        style={{
          position: 'absolute',
          textAlign: 'center',
          zIndex: '1',
          width: '100%',
          height: '40%',
          top: '52%',
        }}
      >
        <p
          style={{
            position: 'absolute',
            textAlign: 'center',
            top: '0',
            width: '100%',
          }}
          className="text-3xl"
        >
          {title}

        </p>
        <p style={{
          textAlign: 'left',
          top: '20%',
          width: '65%',
          margin: '12% auto',
        }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
