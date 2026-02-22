import React from "react";
import { Styled } from "./styled";
import {
    FiServer,
    FiLayers,
    FiDatabase,
    FiClock,
    FiCode,
} from "react-icons/fi";

const AboutPhp = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <div className="top">
                    <div className="badge">
                        <span className="badgeIcon">
                            <FiCode />
                        </span>
                        PHP core revision
                    </div>

                    <h2 className="heading">About PHP Programming</h2>

                    <p className="sub">
                        A powerful server side scripting language designed for
                        building dynamic web applications and backend systems.
                    </p>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiServer />
                            </span>
                            What is PHP
                        </div>
                        <p className="p">
                            PHP is a widely used open source scripting language
                            especially suited for web development. It runs on
                            the server, processes requests, interacts with
                            databases, and generates dynamic HTML responses.
                        </p>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiDatabase />
                            </span>
                            Why PHP matters
                        </div>
                        <p className="p">
                            PHP powers a large portion of the web including
                            content management systems, e commerce platforms,
                            and APIs. It integrates easily with databases like
                            MySQL and supports both procedural and object
                            oriented programming.
                        </p>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="cardIcon">
                                <FiLayers />
                            </span>
                            About php-core-notes
                        </div>
                        <p className="p">
                            The php-core-notes project is designed as a focused
                            backend revision system. It organizes syntax, forms,
                            sessions, security, database interaction, and modern
                            PHP features into a structured single page
                            reference. The goal is clarity in request handling,
                            clean architecture thinking, and secure backend
                            development fundamentals.
                        </p>

                        <div className="meta">
                            <span className="metaLeft">
                                <span className="metaIcon">
                                    <FiClock />
                                </span>
                                <span className="metaLabel">Last updated</span>
                            </span>
                            <span className="metaValue">
                                {formattedDateTime}
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutPhp;
