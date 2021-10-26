/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '../image/button.png';

export default function Button({ text, action }) {
  return (
    <div style={{
      position: 'relative',
      height: '75px',
      width: '225',
    }}
    >
      <button
        style={{
          height: '66px',
          width: '190px',
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
            zIndex: '0',
          }}
          src={Icon}
          alt="button"
        />
        <p
          style={{
            position: 'relative',
            zIndex: '1',
          }}
          className="text-white text-3xl font-aldo"
        >
          {text}
        </p>
      </button>
    </div>
  );
}
