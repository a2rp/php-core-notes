import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShield,
    FiLock,
    FiUpload,
    FiUserCheck,
    FiGlobe,
    FiCode,
} from "react-icons/fi";

/*
Security Essentials - PHP Core Notes
Collapsed by default
Designed for quick backend security revision
*/

const SecurityEssentials = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "xss",
                title: "XSS prevention",
                icon: <FiCode />,
                content:
                    "Cross Site Scripting happens when user input is injected into HTML and executed as JavaScript.",
                tips: [
                    "Never trust user input",
                    "Always escape output using htmlspecialchars",
                    "Use ENT_QUOTES flag",
                    "Avoid echoing raw $_GET or $_POST directly",
                ],
                example: `echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');`,
            },
            {
                key: "csrf",
                title: "CSRF basics",
                icon: <FiShield />,
                content:
                    "Cross Site Request Forgery tricks a logged in user into submitting unwanted requests.",
                tips: [
                    "Use CSRF tokens in forms",
                    "Validate token on form submission",
                    "Regenerate tokens periodically",
                ],
                example: `$_SESSION['token'] === $_POST['token']`,
            },
            {
                key: "validation",
                title: "Input validation",
                icon: <FiUserCheck />,
                content:
                    "Validate data before processing. Sanitization removes unsafe characters. Validation checks correctness.",
                tips: [
                    "Use filter_input and filter_var",
                    "Check required fields",
                    "Validate email, numbers, length",
                    "Never rely only on frontend validation",
                ],
                example: `filter_var($email, FILTER_VALIDATE_EMAIL);`,
            },
            {
                key: "escaping",
                title: "Output escaping",
                icon: <FiCode />,
                content: "Escape output when displaying user data in HTML.",
                tips: [
                    "Use htmlspecialchars for HTML",
                    "Use prepared statements for SQL",
                    "Escape based on context HTML, JS, URL",
                ],
                example: `echo htmlspecialchars($comment);`,
            },
            {
                key: "upload",
                title: "File upload security",
                icon: <FiUpload />,
                content:
                    "File uploads can be dangerous if not restricted properly.",
                tips: [
                    "Validate file type and extension",
                    "Check MIME type",
                    "Limit file size",
                    "Store outside public directory",
                    "Rename uploaded files",
                ],
                example: `move_uploaded_file($tmp, $safePath);`,
            },
            {
                key: "sessionFixation",
                title: "Session fixation",
                icon: <FiLock />,
                content: "Attack where attacker sets session ID before login.",
                tips: [
                    "Regenerate session ID after login",
                    "Use session_regenerate_id(true)",
                ],
                example: `session_regenerate_id(true);`,
            },
            {
                key: "password",
                title: "Password hashing",
                icon: <FiLock />,
                content:
                    "Never store plain passwords. Always hash using strong algorithm.",
                tips: [
                    "Use password_hash",
                    "Use password_verify",
                    "Do not use md5 or sha1",
                ],
                example: `password_hash($pass, PASSWORD_DEFAULT);`,
            },
            {
                key: "https",
                title: "HTTPS importance",
                icon: <FiGlobe />,
                content:
                    "HTTPS encrypts communication between client and server.",
                tips: [
                    "Prevents man in the middle attacks",
                    "Protects login credentials",
                    "Required for secure cookies",
                ],
                example: `Set-Cookie: Secure; HttpOnly`,
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiShield />
                </span>

                <span className="title">Security Essentials</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p>
                        Security is not optional. Even small applications must
                        protect user data and prevent common attacks. Learn
                        these basics before building real systems.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="card" key={sec.key}>
                            <div className="cardTitle">
                                <span className="cardIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <p className="desc">{sec.content}</p>

                            <ul className="list">
                                {sec.tips.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>

                            <div className="example">
                                <code>{sec.example}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SecurityEssentials;
