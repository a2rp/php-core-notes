// formsHandling/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiSend,
    FiGitPullRequest,
    FiShield,
    FiCheckCircle,
    FiFilter,
    FiUploadCloud,
    FiCode,
} from "react-icons/fi";

/*
Forms Handling (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Focus: safe inputs + real backend mindset
*/
const FormsHandling = () => {
    const [open, setOpen] = useState(false);

    const blocks = useMemo(() => {
        return [
            {
                key: "getVsPost",
                title: "GET vs POST",
                icon: <FiGitPullRequest />,
                points: [
                    "GET sends data in the URL (query string). Good for search, filters, bookmarking.",
                    "POST sends data in the request body. Better for forms, passwords, larger payloads.",
                    "Never send sensitive data using GET (it can be logged, shared, cached).",
                ],
                exampleTitle: "Quick example",
                example: `GET:  /profile.php?user=ash
POST: /login.php (email + password in body)`,
            },
            {
                key: "validation",
                title: "Form validation",
                icon: <FiCheckCircle />,
                points: [
                    "Validation means checking input is correct before using it.",
                    "Always validate on server side, even if you validate on frontend.",
                    "Common checks: required, length, format, allowed values, file type and size.",
                ],
                exampleTitle: "Typical validation checks",
                example: `- empty check
- email format
- min and max length
- allowed list (enum)
- numeric range`,
            },
            {
                key: "requiredFields",
                title: "Required fields",
                icon: <FiSend />,
                points: [
                    "Required means the field must exist and must not be empty after trimming.",
                    "Treat missing key and empty value as invalid.",
                    "Use trim() so spaces do not pass validation.",
                ],
                exampleTitle: "Rule",
                example: `trim($name) !== ""`,
            },
            {
                key: "sanitize",
                title: "Sanitizing input",
                icon: <FiShield />,
                points: [
                    "Sanitizing means cleaning input to reduce risk and make it safe to store or display.",
                    "Validation checks if input is acceptable. Sanitizing prepares it for safe usage.",
                    "Always escape on output (XSS prevention).",
                ],
                exampleTitle: "Key idea",
                example: `Validate first, then sanitize, then store.
Escape when outputting to HTML.`,
            },
            {
                key: "htmlspecialchars",
                title: "htmlspecialchars",
                icon: <FiCode />,
                points: [
                    "Converts special characters to HTML entities.",
                    "This prevents user input from becoming real HTML or script on your page.",
                    "Use it when printing user data into HTML (XSS protection).",
                ],
                exampleTitle: "Example",
                example: `echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");`,
            },
            {
                key: "filterInput",
                title: "filter_input",
                icon: <FiFilter />,
                points: [
                    "Reads input safely from GET or POST using filters.",
                    "Useful for emails, integers, URLs, etc.",
                    "Returns filtered value or false/null depending on filter and input.",
                ],
                exampleTitle: "Example",
                example: `$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);`,
            },
            {
                key: "filterVar",
                title: "filter_var",
                icon: <FiFilter />,
                points: [
                    "Filters a variable you already have in your code.",
                    "Useful when data comes from sources other than GET/POST (like JSON body).",
                    "Works similarly to filter_input but takes a value directly.",
                ],
                exampleTitle: "Example",
                example: `$age = filter_var($rawAge, FILTER_VALIDATE_INT);`,
            },
            {
                key: "fileUpload",
                title: "File upload basics",
                icon: <FiUploadCloud />,
                points: [
                    "Uploaded files are available in $_FILES.",
                    "Always check: error, size, allowed type, and final filename.",
                    "Never trust original filename. Generate your own safe name.",
                ],
                exampleTitle: "What to check",
                example: `- $_FILES["file"]["error"] === UPLOAD_ERR_OK
- max size limit
- allow only safe extensions
- move_uploaded_file() to a safe folder`,
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
                    <FiSend />
                </span>

                <span className="title">Forms Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiShield />
                        </span>
                        Safe form handling checklist
                    </div>

                    <p className="p">
                        Forms are one of the biggest entry points for bugs and
                        security issues. The core rule is simple: validate input
                        on server side, sanitize for storage, and escape on
                        output.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Remember</div>
                        <div className="noteText">
                            Client side validation is for UX. Server side
                            validation is for security and correctness.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {blocks.map((b) => {
                        return (
                            <div className="section" key={b.key}>
                                <div className="sectionTitle">
                                    <span className="sectionIcon">
                                        {b.icon}
                                    </span>
                                    {b.title}
                                </div>

                                <ul className="bullets">
                                    {b.points.map((x, i) => (
                                        <li
                                            className="bullet"
                                            key={`${b.key}-${i}`}
                                        >
                                            <span className="dot" />
                                            <span className="bulletText">
                                                {x}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="codeBlock">
                                    <div className="codeTop">Quick example</div>
                                    <pre className="code">{b.example}</pre>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FormsHandling;
