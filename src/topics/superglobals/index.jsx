import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGlobe,
    FiUpload,
    FiDatabase,
    FiKey,
    FiServer,
    FiCode,
} from "react-icons/fi";

/*
Superglobals (PHP Core Notes)
- Always available
- Accessible in any scope
- Used for handling requests, sessions, files, environment
*/
const Superglobals = () => {
    const [open, setOpen] = useState(false);

    const data = useMemo(() => {
        return [
            {
                name: "$_GET",
                icon: <FiGlobe />,
                desc: "Collects data sent via URL query string.",
                example:
                    "example.com/page.php?name=ash\n\n$_GET['name'] -> 'ash'",
            },
            {
                name: "$_POST",
                icon: <FiGlobe />,
                desc: "Collects data sent via HTTP POST method (usually forms).",
                example: "<form method='POST'>\n$_POST['email']",
            },
            {
                name: "$_REQUEST",
                icon: <FiGlobe />,
                desc: "Contains data from GET, POST, and COOKIE (not recommended for secure logic).",
                example: "$_REQUEST['username']",
            },
            {
                name: "$_SERVER",
                icon: <FiServer />,
                desc: "Contains server and request information.",
                example: "$_SERVER['REQUEST_METHOD']\n$_SERVER['HTTP_HOST']",
            },
            {
                name: "$_FILES",
                icon: <FiUpload />,
                desc: "Used for file uploads via forms.",
                example: "$_FILES['file']['name']\n$_FILES['file']['tmp_name']",
            },
            {
                name: "$_SESSION",
                icon: <FiDatabase />,
                desc: "Stores data across multiple pages for a user session.",
                example: "session_start();\n$_SESSION['user'] = 'ash';",
            },
            {
                name: "$_COOKIE",
                icon: <FiKey />,
                desc: "Stores small data in the user's browser.",
                example: "setcookie('theme', 'dark');\n$_COOKIE['theme']",
            },
            {
                name: "$_ENV",
                icon: <FiCode />,
                desc: "Contains environment variables.",
                example: "$_ENV['PATH']",
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="titleIcon">
                    <FiCode />
                </span>

                <span className="title">Superglobals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`body ${open ? "open" : ""}`}>
                <div className="intro">
                    <p>
                        Superglobals are built-in associative arrays available
                        in all scopes. They provide access to request data,
                        server info, sessions, cookies, files, and environment
                        variables.
                    </p>

                    <div className="note">
                        Always validate and sanitize external input like $_GET
                        and $_POST to prevent security issues.
                    </div>
                </div>

                <div className="grid">
                    {data.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="cardHeader">
                                <span className="cardIcon">{item.icon}</span>
                                <span className="cardTitle">{item.name}</span>
                            </div>

                            <p className="desc">{item.desc}</p>

                            <pre className="example">{item.example}</pre>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Superglobals;
