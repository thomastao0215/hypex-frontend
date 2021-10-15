import React from "react";

export default function NavigationBar() {
    return (
        <>
            <div class="navbar bg-dark-blue-HypeX mb-2 shadow-lg text-neutral-content rounded-box px-1.5">
                <div class="flex-none mx-2">
                    <span class="btn-square">
                        <img src="./image/logo1.png"></img>
                    </span>
                </div>
                <div class="flex-1 px-2 mx-2">
                    <div class="items-stretch hidden lg:flex">
                        <a class="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </a>
                        <a class="btn btn-ghost btn-sm rounded-btn">
                            Market Place
                        </a>
                    </div>
                </div>
                <div class="flex-none">
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        Profile
                    </a>
                </div>
                <div class="flex-none">
                    <div class="avatar">
                        <div class="rounded-full w-10 h-10 m-1">
                            <img src="https://i.pravatar.cc/500?img=32" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
