// sessionsAndCookies/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLock,
    FiKey,
    FiClock,
    FiTrash2,
    FiCode,
    FiShield,
    FiUserCheck,
} from "react-icons/fi";

/*
Sessions and Cookies (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Short + practical reminders for beginners
*/
const SessionsAndCookies = () => {
    const [open, setOpen] = useState(false);

    const data = useMemo(() => {
        return [
            {
                key: "cookies",
                title: "Cookies",
                icon: <FiKey />,
                intro: "Cookies are small key-value data stored in the browser and sent with requests to the server. Good for preferences and session ids.",
                blocks: [
                    {
                        heading: "setcookie",
                        points: [
                            "Must be sent before any output (before echo / HTML).",
                            "Stored in browser, returned in next request headers.",
                            "Use for lightweight data - never store passwords.",
                        ],
                        exampleTitle: "Basic cookie",
                        example: `setcookie("theme", "dark", time() + 3600, "/");`,
                    },
                    {
                        heading: "Expiry",
                        points: [
                            "Expiry controls how long the cookie stays.",
                            "Session cookie: expires when browser closes (no expiry).",
                            "Persistent cookie: set expiry using time() + seconds.",
                        ],
                        exampleTitle: "Expires in 7 days",
                        example: `setcookie("visit", "yes", time() + (7 * 24 * 60 * 60), "/");`,
                    },
                    {
                        heading: "Security flags",
                        points: [
                            "HttpOnly: JS cannot read cookie (helps against XSS).",
                            "Secure: cookie sent only over HTTPS.",
                            "SameSite: helps reduce CSRF by controlling cross-site sending.",
                        ],
                        exampleTitle: "Safer cookie options",
                        example: `setcookie("sid", $sessionId, [
  "expires" => time() + 3600,
  "path" => "/",
  "secure" => true,
  "httponly" => true,
  "samesite" => "Lax"
]);`,
                        note: "In localhost HTTP, secure: true will prevent cookie from being set. Use secure: true in production HTTPS.",
                    },
                ],
            },
            {
                key: "sessions",
                title: "Sessions",
                icon: <FiLock />,
                intro: "Sessions store user data on the server. The browser only stores a session id (usually via cookie). Best for login state.",
                blocks: [
                    {
                        heading: "session_start",
                        points: [
                            "Start session at the top of the request.",
                            "Required before reading or writing $_SESSION.",
                            "Must be called before any output.",
                        ],
                        exampleTitle: "Start session",
                        example: `session_start();`,
                    },
                    {
                        heading: "$_SESSION usage",
                        points: [
                            "Store data like user id after login.",
                            "Read it on every protected page request.",
                            "Keep it minimal. Store ids, not big objects.",
                        ],
                        exampleTitle: "Set and read session",
                        example: `// after login success
$_SESSION["userId"] = $user["id"];
$_SESSION["role"] = $user["role"];

// later on protected page
if (!isset($_SESSION["userId"])) {
  header("Location: /login.php");
  exit;
}`,
                    },
                    {
                        heading: "Destroying sessions",
                        points: [
                            "Unset session variables to clear user data.",
                            "Destroy session to remove the session storage on server.",
                            "Also clear session cookie for a complete logout.",
                        ],
                        exampleTitle: "Logout flow",
                        example: `session_start();

$_SESSION = []; // clear session array

if (ini_get("session.use_cookies")) {
  $params = session_get_cookie_params();
  setcookie(session_name(), "", time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
}

session_destroy();

header("Location: /login.php");
exit;`,
                    },
                    {
                        heading: "Login system basics",
                        points: [
                            "User submits email/password via POST.",
                            "Server verifies password using password_verify.",
                            "On success, store user id in $_SESSION.",
                            "Protect routes by checking $_SESSION['userId'].",
                        ],
                        exampleTitle: "Minimal login idea",
                        example: `// 1) POST login.php
// 2) find user by email
// 3) verify password
// 4) set session and redirect

if ($ok) {
  session_start();
  $_SESSION["userId"] = $user["id"];
  header("Location: /dashboard.php");
  exit;
}`,
                        note: "Always hash passwords (password_hash). Never store raw passwords in database.",
                    },
                ],
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiShield />
                </span>

                <span className="title">Sessions and Cookies</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiUserCheck />
                        </span>
                        Login state and browser storage basics
                    </div>

                    <p className="p">
                        Cookies live in the browser. Sessions live on the
                        server. Most login systems use sessions and store only a
                        session id in a cookie.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Quick rule</div>
                        <div className="noteText">
                            Use cookies for small preferences. Use sessions for
                            authentication and user state.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {data.map((sec) => {
                        return (
                            <div className="section" key={sec.key}>
                                <div className="sectionTop">
                                    <div className="sectionTitle">
                                        <span className="sectionIcon">
                                            {sec.icon}
                                        </span>
                                        {sec.title}
                                    </div>

                                    <p className="sectionIntro">{sec.intro}</p>
                                </div>

                                <div className="blocks">
                                    {sec.blocks.map((b, idx) => {
                                        return (
                                            <div
                                                className="block"
                                                key={`${sec.key}-${idx}`}
                                            >
                                                <div className="blockHead">
                                                    <div className="blockTitle">
                                                        {b.heading}
                                                    </div>

                                                    {b.heading === "Expiry" && (
                                                        <span className="miniBadge">
                                                            <span className="miniIcon">
                                                                <FiClock />
                                                            </span>
                                                            time based
                                                        </span>
                                                    )}

                                                    {b.heading ===
                                                        "Destroying sessions" && (
                                                        <span className="miniBadge">
                                                            <span className="miniIcon">
                                                                <FiTrash2 />
                                                            </span>
                                                            logout
                                                        </span>
                                                    )}

                                                    {b.heading ===
                                                        "Security flags" && (
                                                        <span className="miniBadge">
                                                            <span className="miniIcon">
                                                                <FiLock />
                                                            </span>
                                                            secure
                                                        </span>
                                                    )}
                                                </div>

                                                <ul className="bullets">
                                                    {b.points.map((x, i) => (
                                                        <li
                                                            className="bullet"
                                                            key={`${sec.key}-${idx}-${i}`}
                                                        >
                                                            <span className="dot" />
                                                            <span>{x}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="codeBlock">
                                                    <div className="codeTop">
                                                        <span className="codeIcon">
                                                            <FiCode />
                                                        </span>
                                                        {b.exampleTitle}
                                                    </div>
                                                    <pre className="code">
                                                        {b.example}
                                                    </pre>
                                                </div>

                                                {b.note && (
                                                    <div className="hint">
                                                        <div className="hintTitle">
                                                            Tip
                                                        </div>
                                                        <div className="hintText">
                                                            {b.note}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SessionsAndCookies;
