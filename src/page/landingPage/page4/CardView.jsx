import React from 'react';
import Card from '../../../image/Page4/card-four.png';

export default function CardView() {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${Card})`,
        backgroundSize: 'fit',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      >
        <p>Title</p>
      </div>
    </div>
  );
}
