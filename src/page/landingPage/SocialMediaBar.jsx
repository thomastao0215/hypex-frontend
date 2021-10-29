import React from 'react';
import {
  FaTwitter, FaDiscord, FaTelegram, FaInstagram,
} from 'react-icons/fa';

const redirect = (url) => {
  window.location = url;
};

export default function SocialMediaBar() {
  return (
    <div className="grid grid-cols-1 text-5xl text-white">
      <span
        role="link"
        className="mb-6"
        onClick={() => {
          redirect('https://www.instagram.com/HypeX_io/');
        }}
      >
        <FaInstagram />
      </span>
      <span
        role="link"
        className="mb-6"
        onClick={() => {
          redirect('https://twitter.com/HypeX_io');
        }}
      >
        <FaTwitter />
      </span>
      <span
        role="link"
        className="mb-6"
        onClick={() => {
          redirect('https://discord.com/invite/hypeX');
        }}
      >
        <FaDiscord />
      </span>
      <span
        role="link"
        className="mb-6"
        onClick={() => {
          redirect('https://t.me/HypeX_Official');
        }}
      >
        <FaTelegram />
      </span>
    </div>
  );
}
