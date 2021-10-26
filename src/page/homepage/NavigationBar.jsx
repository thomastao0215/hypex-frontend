/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '../../image/HypeX1.png';

export default function NavigationBar() {
  return (
    <>
      <div className="navbar bg-dark-blue-HypeX mb-2 shadow-lg text-neutral-content rounded-box px-1.5">
        <div className="flex-none mx-2">
          <span className="btn-square">
            <img src={Icon} alt="icon" />
          </span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">
              Market Place
            </a>
          </div>
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost btn-sm rounded-btn">
            Profile
          </a>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" alt="profie" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
