// Header.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import transparentLogo from "/images/transparentLogo.png";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    // Initialize theme from localStorage or default
    useEffect(() => {
        const storedTheme = localStorage.getItem("app-theme");
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    // Apply theme + persist
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="logoNameThemeToggleWrapper">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={transparentLogo}
                                alt="php-core-notes"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">php-core-notes</div>
                            <div className="subTitle">
                                At-a-glance php revision
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
