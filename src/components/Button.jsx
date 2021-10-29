/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { isMobile } from 'react-device-detect';
import Icon from '../image/button.png';

export default function Button({ text, action }) {
  return (
    <div style={{
      position: 'relative',
      height: isMobile ? '37px' : '75px',
      width: isMobile ? '120px' : '225px',
    }}
    >
      <button
        style={{
          height: '100%',
          width: '100%',
        }}
        type="button"
        onClick={action}
      >
        <img
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '100%',
            width: '100%',
            zIndex: '0',
          }}
          src={Icon}
          alt="button"
        />
        <p
          style={{
            position: 'relative',
            left: '50%',
            top: '0',
            transform: 'translate(-50%,0%)',
            zIndex: '1',
          }}
          className={`text-white font-aldo ${isMobile ? 'text-2xl' : 'text-3xl'}`}
        >
          {text}
        </p>
      </button>
    </div>
  );
}
