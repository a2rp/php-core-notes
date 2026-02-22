import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAlertCircle,
    FiShield,
    FiTool,
    FiClock,
} from "react-icons/fi";

/*
Error Handling - PHP Core Notes
Quick revision for handling runtime problems safely.
*/
const ErrorHandling = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "errorReporting",
                title: "error_reporting",
                icon: <FiTool />,
                desc: "Controls which PHP errors are displayed or logged.",
                code: `// Show all errors (development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hide errors (production)
ini_set('display_errors', 0);`,
                note: "Use full error reporting in development. Disable display in production.",
            },
            {
                key: "tryCatch",
                title: "try catch",
                icon: <FiShield />,
                desc: "Used to handle exceptions safely without crashing the application.",
                code: `try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo $e->getMessage();
}`,
                note: "Code that may fail goes inside try block.",
            },
            {
                key: "throw",
                title: "throw",
                icon: <FiAlertCircle />,
                desc: "Used to manually create and throw an exception.",
                code: `function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero not allowed");
    }
    return $a / $b;
}`,
                note: "throw stops execution and passes control to catch block.",
            },
            {
                key: "exceptions",
                title: "Exceptions",
                icon: <FiShield />,
                desc: "Exceptions represent runtime errors that can be caught and handled.",
                code: `try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}`,
                note: "Exceptions provide structured error handling.",
            },
            {
                key: "customExceptions",
                title: "Custom Exceptions",
                icon: <FiAlertCircle />,
                desc: "Create your own exception class for better control.",
                code: `class MyException extends Exception {}

try {
    throw new MyException("Custom error triggered");
} catch (MyException $e) {
    echo $e->getMessage();
}`,
                note: "Custom exceptions help separate different error types.",
            },
        ];
    }, []);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiAlertCircle />
                </span>

                <span className="title">Error Handling</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiClock />
                        </span>
                        Handle runtime errors safely
                    </div>

                    <p className="p">
                        Error handling prevents application crashes and allows
                        graceful failure. PHP supports both traditional error
                        reporting and modern exception handling.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="sectionBody">
                                <p className="desc">{sec.desc}</p>

                                <pre>
                                    <code>{sec.code}</code>
                                </pre>

                                <div className="note">
                                    <strong>Important:</strong> {sec.note}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ErrorHandling;
