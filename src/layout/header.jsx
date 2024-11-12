import React from "react";
import logo from "../assets/logo.svg";

export const Header = () => {
    return (
        <div className="container py-[30px] flex items-center justify-between">
            <div className="first flex items-center gap-[32px]">
                <div className="header_block">
                    <img src={logo} alt="logo" />
                </div>

                <div className="link_block">
                    <ul className="flex items-center gap-[32px]">
                        <li>
                            <a
                                className="font-medium text-[14px] leading-[143%] text-[#6e6d7a]"
                                href=""
                            >
                                Inspiration
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-medium text-[14px] leading-[143%] text-[#6e6d7a]"
                                href=""
                            >
                                Find Work
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-medium text-[14px] leading-[143%] text-[#6e6d7a]"
                                href=""
                            >
                                Learn Design
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-medium text-[14px] leading-[143%] text-[#6e6d7a]"
                                href=""
                            >
                                Go Pro
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-medium text-[14px] leading-[143%] text-[#6e6d7a]"
                                href=""
                            >
                                Hire Designers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="search_block">
                <button className="rounded-[8px] py-[10px] px-[15px] leading-[143%] text-[14px] font-medium text-white bg-[#ea4c89]">
                    Sign up
                </button>
            </div>
        </div>
    );
};
