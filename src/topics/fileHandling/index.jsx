// fileHandling/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiFileText,
    FiFolder,
    FiEdit3,
    FiTrash2,
    FiSearch,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

/*
File Handling (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Focus: what each function does + tiny usage notes
*/
const FileHandling = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                key: "fopen",
                title: "fopen",
                icon: <FiFolder />,
                what: "Opens a file and returns a file handle (resource). Needed for fread, fwrite, fclose.",
                notes: [
                    "Common modes: r, r+, w, w+, a, a+",
                    "w creates file if missing and truncates it",
                    "a appends and creates file if missing",
                ],
                example: `$handle = fopen("notes.txt", "r");`,
            },
            {
                key: "fread",
                title: "fread",
                icon: <FiFileText />,
                what: "Reads bytes from an open file handle.",
                notes: [
                    "You must pass how many bytes to read",
                    "Often combined with filesize() for full read",
                ],
                example: `$data = fread($handle, 1024);`,
            },
            {
                key: "fwrite",
                title: "fwrite",
                icon: <FiEdit3 />,
                what: "Writes a string to an open file handle.",
                notes: [
                    "Returns number of bytes written",
                    "Use a or a+ mode to append",
                    "Use w or w+ mode to overwrite",
                ],
                example: `fwrite($handle, "Hello\\n");`,
            },
            {
                key: "fclose",
                title: "fclose",
                icon: <FiCode />,
                what: "Closes an open file handle and frees resources.",
                notes: [
                    "Always close handles after use",
                    "Prevents file locks and resource leaks",
                ],
                example: `fclose($handle);`,
            },
            {
                key: "file_get_contents",
                title: "file_get_contents",
                icon: <FiFileText />,
                what: "Reads the entire file into a string (simple and common).",
                notes: [
                    "Best for small to medium files",
                    "Returns false on failure",
                ],
                example: `$text = file_get_contents("notes.txt");`,
            },
            {
                key: "file_put_contents",
                title: "file_put_contents",
                icon: <FiEdit3 />,
                what: "Writes a string to a file in one call.",
                notes: [
                    "Overwrites by default",
                    "Use FILE_APPEND to append",
                    "Creates file if missing",
                ],
                example: `file_put_contents("notes.txt", "Hello\\n", FILE_APPEND);`,
            },
            {
                key: "unlink",
                title: "unlink",
                icon: <FiTrash2 />,
                what: "Deletes a file from the filesystem.",
                notes: [
                    "Returns true on success, false on failure",
                    "Check file_exists before unlink to avoid warnings",
                ],
                example: `unlink("old.txt");`,
            },
            {
                key: "file_exists",
                title: "file_exists",
                icon: <FiSearch />,
                what: "Checks if a file or directory exists at a path.",
                notes: [
                    "Returns true or false",
                    "Good before read, write, or delete operations",
                ],
                example: `if (file_exists("notes.txt")) { ... }`,
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
                    <FiFileText />
                </span>

                <span className="title">File Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiFileText />
                        </span>
                        Read, write, append, delete files
                    </div>

                    <p className="p">
                        PHP file handling is used for logs, reports, uploads,
                        simple storage, and server side text processing. For
                        most cases, prefer file_get_contents and
                        file_put_contents for simplicity.
                    </p>

                    <div className="note">
                        <div className="noteTitle">
                            <span className="noteIcon">
                                <FiAlertTriangle />
                            </span>
                            Safety reminder
                        </div>
                        <div className="noteText">
                            Always validate file paths if input comes from
                            users. Never trust user provided filenames directly.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {items.map((it) => (
                        <div className="card" key={it.key}>
                            <div className="cardTop">
                                <div className="cardTitle">
                                    <span className="cardIcon">{it.icon}</span>
                                    {it.title}
                                </div>
                                <div className="tag">PHP</div>
                            </div>

                            <p className="what">{it.what}</p>

                            <ul className="bullets">
                                {it.notes.map((n, idx) => (
                                    <li key={`${it.key}-n-${idx}`}>
                                        <span className="dot" />
                                        <span className="bulletText">{n}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="example">
                                <div className="exTop">
                                    <span className="exIcon">
                                        <FiCode />
                                    </span>
                                    Example
                                </div>
                                <pre className="code">{it.example}</pre>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick patterns</div>

                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Small files: use file_get_contents and
                            file_put_contents
                        </li>
                        <li>
                            <span className="checkDot" />
                            Streaming or large files: use fopen, fread, fwrite,
                            fclose
                        </li>
                        <li>
                            <span className="checkDot" />
                            Before delete or read: file_exists
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FileHandling;
