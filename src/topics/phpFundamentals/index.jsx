// phpFundamentals/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBookOpen,
    FiServer,
    FiGlobe,
    FiShuffle,
    FiTerminal,
    FiCode,
    FiEdit3,
    FiHash,
    FiBox,
} from "react-icons/fi";

/*
PHP Fundamentals (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Expand for quick beginner friendly explanations
*/
const PhpFundamentals = () => {
    const [open, setOpen] = useState(false);

    const blocks = useMemo(() => {
        return [
            {
                key: "intro",
                title: "Introduction",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "What is PHP",
                        text: "PHP is a server side scripting language used to build dynamic websites, backend logic, and APIs. The server runs PHP code and sends the result (usually HTML or JSON) to the browser.",
                    },
                    {
                        title: "How PHP works",
                        text: "Browser requests a URL, the server runs PHP, PHP can talk to a database, then the server returns the final response to the browser. The browser never sees your PHP code.",
                    },
                    {
                        title: "Client vs Server",
                        text: "Client is the browser (runs HTML, CSS, JavaScript). Server is where PHP runs (handles requests, connects to DB, returns HTML or JSON).",
                    },
                    {
                        title: "PHP execution flow",
                        text: "Request comes in → server routes it → PHP runs from top to bottom → optional DB/file work → output is generated → response is sent back.",
                    },
                    {
                        title: "PHP vs JavaScript",
                        text: "JavaScript mostly runs in the browser for UI and interactions. PHP runs on the server for backend tasks. Both can be used together: JS for frontend, PHP for backend.",
                    },
                    {
                        title: "Installing PHP (XAMPP, MAMP, CLI)",
                        text: "XAMPP (Windows/Linux) and MAMP (Mac) give PHP + Apache + MySQL quickly. CLI lets you run PHP in terminal for scripts and quick testing.",
                    },
                ],
            },
            {
                key: "syntax",
                title: "Basic Syntax",
                icon: <FiCode />,
                items: [
                    {
                        title: "PHP tags",
                        text: "PHP code is written inside PHP tags. Most common: <?php ... ?>. In a .php file you can mix HTML and PHP.",
                        example: `<?php echo "Hello"; ?>`,
                    },
                    {
                        title: "echo and print",
                        text: "echo and print output text. echo is slightly faster and can output multiple values. print returns 1 (rarely used).",
                        example: `echo "Hi";\nprint "Hello";`,
                    },
                    {
                        title: "Statements and semicolons",
                        text: "Most PHP statements end with a semicolon. Missing semicolon is a common beginner error.",
                        example: `$x = 10;\necho $x;`,
                    },
                    {
                        title: "Case sensitivity",
                        text: "Variable names are case sensitive ($name and $Name are different). Keywords like if, echo are not case sensitive, but stick to normal lowercase style.",
                    },
                    {
                        title: "Comments",
                        text: "Use comments for notes. // single line, # single line, /* multi line */.",
                        example: `// comment\n# comment\n/* multi line */`,
                    },
                ],
            },
            {
                key: "variables",
                title: "Variables",
                icon: <FiEdit3 />,
                items: [
                    {
                        title: "Variable syntax",
                        text: "Variables start with $ and are assigned using =.",
                        example: `$name = "Ash";\n$age = 24;`,
                    },
                    {
                        title: "Naming rules",
                        text: "Must start with a letter or underscore after $. Can include numbers later. No spaces. Use meaningful names like $userName or $totalPrice.",
                    },
                    {
                        title: "Dynamic typing",
                        text: "PHP is dynamically typed, so a variable can hold different types over time. Still, keep code predictable and avoid random type switching.",
                        example: `$x = 5;\n$x = "five";`,
                    },
                    {
                        title: "Variable variables",
                        text: "A variable name can be stored in another variable. Used rarely, but good to know it exists.",
                        example: `$a = "name";\n$$a = "Ash";\necho $name;`,
                    },
                    {
                        title: "Constants (define, const)",
                        text: "Constants are values that should not change. define() is common, const is used inside classes or at top level. Constant names are usually uppercase.",
                        example: `define("APP_NAME", "php-core-notes");\nconst VERSION = "1.0.0";`,
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
                    <FiServer />
                </span>

                <span className="title">PHP Fundamentals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiGlobe />
                        </span>
                        Server side basics in one view
                    </div>

                    <p className="p">
                        This section covers what PHP is, how it fits in the web,
                        and the syntax and variable basics you will use
                        everywhere.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Quick mindset</div>
                        <div className="noteText">
                            Browser runs HTML CSS JS. Server runs PHP. The
                            browser only receives the output, not your PHP code.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {blocks.map((block) => {
                        return (
                            <div className="section" key={block.key}>
                                <div className="sectionTitle">
                                    <span className="sectionIcon">
                                        {block.icon}
                                    </span>
                                    {block.title}
                                </div>

                                <div className="rows">
                                    {block.items.map((it, idx) => (
                                        <div
                                            className="row"
                                            key={`${block.key}-${idx}`}
                                        >
                                            <div className="left">
                                                <div className="itemTitle">
                                                    {it.title}
                                                </div>
                                                <div className="desc">
                                                    {it.text}
                                                </div>

                                                {it.example && (
                                                    <div className="example">
                                                        <div className="exTop">
                                                            <span className="exIcon">
                                                                <FiTerminal />
                                                            </span>
                                                            Example
                                                        </div>
                                                        <pre className="code">
                                                            <code>
                                                                {it.example}
                                                            </code>
                                                        </pre>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="rightHint">
                                                <div className="hintChip">
                                                    <span className="hintIcon">
                                                        <FiHash />
                                                    </span>
                                                    Remember
                                                </div>

                                                <div className="hintText">
                                                    {block.key === "intro" &&
                                                        "Server runs PHP and returns HTML or JSON."}
                                                    {block.key === "syntax" &&
                                                        "Semicolons and correct tags prevent silly errors."}
                                                    {block.key ===
                                                        "variables" &&
                                                        "Prefer clear variable names and constants for fixed values."}
                                                </div>

                                                <div className="mini">
                                                    <span className="miniIcon">
                                                        <FiBox />
                                                    </span>
                                                    <div className="miniText">
                                                        Keep it predictable
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PhpFundamentals;
