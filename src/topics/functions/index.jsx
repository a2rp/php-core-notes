import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiPlay,
    FiSliders,
    FiCornerUpLeft,
    FiLayers,
    FiGlobe,
    FiZap,
} from "react-icons/fi";

/*
Functions - PHP Core Notes
Collapsed by default
Quick revision focused
*/

const Functions = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "creating",
                title: "Creating Functions",
                icon: <FiCode />,
                text: "Functions group reusable logic. Use the function keyword.",
                code: `function greet() {
    echo "Hello";
}`,
            },
            {
                key: "parameters",
                title: "Parameters",
                icon: <FiSliders />,
                text: "Parameters allow passing data into functions.",
                code: `function greet($name) {
    echo "Hello " . $name;
}`,
            },
            {
                key: "default",
                title: "Default Parameters",
                icon: <FiLayers />,
                text: "You can assign default values to parameters.",
                code: `function greet($name = "Guest") {
    echo "Hello " . $name;
}`,
            },
            {
                key: "return",
                title: "Return Values",
                icon: <FiCornerUpLeft />,
                text: "Use return to send value back from function.",
                code: `function add($a, $b) {
    return $a + $b;
}`,
            },
            {
                key: "types",
                title: "Type Declarations",
                icon: <FiZap />,
                text: "PHP supports parameter and return types.",
                code: `function add(int $a, int $b): int {
    return $a + $b;
}`,
            },
            {
                key: "anonymous",
                title: "Anonymous Functions",
                icon: <FiCode />,
                text: "Functions without name. Often used as callbacks.",
                code: `$greet = function($name) {
    return "Hello " . $name;
};`,
            },
            {
                key: "arrow",
                title: "Arrow Functions",
                icon: <FiPlay />,
                text: "Short syntax for simple functions.",
                code: `$square = fn($x) => $x * $x;`,
            },
            {
                key: "scope",
                title: "Variable Scope",
                icon: <FiLayers />,
                text: "Variables inside function are local by default.",
                code: `$x = 10;

function test() {
    // $x is not accessible here
}`,
            },
            {
                key: "global",
                title: "global Keyword",
                icon: <FiGlobe />,
                text: "Use global to access global variables inside function.",
                code: `$x = 10;

function test() {
    global $x;
    echo $x;
}`,
            },
            {
                key: "static",
                title: "Static Variables",
                icon: <FiZap />,
                text: "Static variables retain value between function calls.",
                code: `function counter() {
    static $count = 0;
    $count++;
    echo $count;
}`,
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

                <span className="title">Functions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <FiCode />
                        Function fundamentals at a glance
                    </div>

                    <p className="p">
                        Functions help organize reusable logic. In PHP,
                        understanding scope, return types, and modern syntax
                        like arrow functions is essential.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="content">
                                <div className="desc">{sec.text}</div>
                                <pre>
                                    <code>{sec.code}</code>
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Functions;
