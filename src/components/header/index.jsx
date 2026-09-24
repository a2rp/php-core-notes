import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Styled } from "./styled";

export default function Header() {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "dark");
    const nextTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
        else document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="logoNameThemeToggleWrapper">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" aria-hidden="true" />}
                            <img
                                src="/php-core-notes/logo.png"
                                alt="Ashish Ranjan logo"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>
                        <div className="nameWrapper">
                            <div className="title">PHP Core Notes</div>
                            <div className="subTitle">At-a-glance PHP revision</div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={() => setTheme(nextTheme)}
                        aria-label={`Switch to ${nextTheme} theme`}
                        aria-pressed={theme === "light"}
                    >
                        <span className="icon">{theme === "light" ? <FiMoon /> : <FiSun />}</span>
                        <span className="label">{theme === "light" ? "Light" : "Dark"}</span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
}
