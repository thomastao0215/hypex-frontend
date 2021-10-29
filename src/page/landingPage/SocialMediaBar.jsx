import React from 'react';
import {
  FaTwitter, FaDiscord, FaTelegram, FaInstagram,
} from 'react-icons/fa';

const redirect = (url) => {
  window.location = url;
};

const iconMrgin = 'mb-3';

export default function SocialMediaBar() {
  return (
    <div className="grid grid-cols-1 text-3xl text-white">
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://www.instagram.com/HypeX_io/');
        }}
      >
        <FaInstagram />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://twitter.com/HypeX_io');
        }}
      >
        <FaTwitter />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://discord.com/invite/hypeX');
        }}
      >
        <FaDiscord />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://t.me/HypeX_Official');
        }}
      >
        <FaTelegram />
      </span>
    </div>
  );
}
