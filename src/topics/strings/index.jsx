// strings/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiType,
    FiCode,
    FiSearch,
    FiScissors,
    FiRefreshCw,
    FiDroplet,
    FiArrowDown,
    FiArrowUp,
    FiShield,
    FiCornerDownLeft,
} from "react-icons/fi";

/*
Strings (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Expand for quick examples and reminders
*/
const Strings = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                key: "strlen",
                title: "strlen",
                icon: <FiType />,
                what: "Returns the length of a string (number of characters).",
                example: 'strlen("hello") -> 5',
                note: "If you deal with multibyte characters (like Hindi), use mb_strlen with mbstring extension.",
            },
            {
                key: "strpos",
                title: "strpos",
                icon: <FiSearch />,
                what: "Finds the position of the first occurrence of a substring. Returns an index or false.",
                example: 'strpos("hello world", "world") -> 6',
                note: "Important: strpos can return 0 (found at start). Always check with !== false.",
            },
            {
                key: "substr",
                title: "substr",
                icon: <FiScissors />,
                what: "Returns a portion of a string using start index and optional length.",
                example: 'substr("abcdef", 1, 3) -> "bcd"',
                note: "Negative start or length can count from the end.",
            },
            {
                key: "str_replace",
                title: "str_replace",
                icon: <FiRefreshCw />,
                what: "Replaces all occurrences of a search string with a replacement string.",
                example:
                    'str_replace("cat", "dog", "cat and cat") -> "dog and dog"',
                note: "This is case-sensitive. For case-insensitive, use str_ireplace.",
            },
            {
                key: "trim",
                title: "trim",
                icon: <FiDroplet />,
                what: "Removes whitespace from the start and end of a string.",
                example: 'trim("  hello  ") -> "hello"',
                note: "Useful before validation and saving user input.",
            },
            {
                key: "strtolower",
                title: "strtolower",
                icon: <FiArrowDown />,
                what: "Converts a string to lowercase.",
                example: 'strtolower("HELLO") -> "hello"',
                note: "Used for case-insensitive comparisons like emails and usernames.",
            },
            {
                key: "strtoupper",
                title: "strtoupper",
                icon: <FiArrowUp />,
                what: "Converts a string to uppercase.",
                example: 'strtoupper("hello") -> "HELLO"',
                note: "Good for display formatting, not for strict identifiers.",
            },
            {
                key: "htmlspecialchars",
                title: "htmlspecialchars",
                icon: <FiShield />,
                what: "Escapes special characters for safe HTML output to prevent XSS.",
                example: 'htmlspecialchars("<script>") -> "&lt;script&gt;"',
                note: "Use when showing user input in HTML. This is a security must-know.",
            },
            {
                key: "nl2br",
                title: "nl2br",
                icon: <FiCornerDownLeft />,
                what: "Converts newline characters (\\n) into <br> tags for HTML display.",
                example: 'nl2br("line1\\nline2") -> "line1<br />\\nline2"',
                note: "Often used for displaying textarea content in HTML.",
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
                    <FiCode />
                </span>

                <span className="title">Strings</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiType />
                        </span>
                        Most used PHP string helpers
                    </div>

                    <p className="p">
                        Strings show up everywhere: forms, APIs, database data,
                        file content. These functions cover the most common
                        tasks like search, slicing, formatting, and safe HTML
                        output.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Security tip</div>
                        <div className="noteText">
                            If you output user input inside HTML, use{" "}
                            <span className="mono">htmlspecialchars</span> to
                            prevent XSS.
                        </div>
                    </div>
                </div>

                <div className="list">
                    {items.map((it) => (
                        <div className="card" key={it.key}>
                            <div className="cardTop">
                                <span className="cardIcon">{it.icon}</span>
                                <div className="cardTitle">{it.title}</div>
                            </div>

                            <div className="desc">{it.what}</div>

                            <div className="example">
                                <span className="exLabel">Example</span>
                                <span className="mono">{it.example}</span>
                            </div>

                            <div className="noteRow">
                                <span className="notePill">Note</span>
                                <span className="noteText">{it.note}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Strings;
