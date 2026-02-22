// components/footer/index.jsx
import React from "react";
import { Styled } from "./styled";

const Footer = () => {
    return (
        <Styled.Wrapper>
            <div className="left">
                © {new Date().getFullYear()} | All rights reserved
            </div>

            <div className="right">
                By&nbsp;
                <a
                    href="https://www.ashishranjan.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
