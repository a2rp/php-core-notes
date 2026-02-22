// operators/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiHash,
    FiCpu,
    FiGitCommit,
    FiShuffle,
    FiType,
} from "react-icons/fi";

/*
Operators (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Expand for quick examples and reminders
*/
const Operators = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "arithmetic",
                title: "Arithmetic",
                icon: <FiCpu />,
                lines: [
                    {
                        op: "/",
                        text: "Division. In PHP, / returns float if needed.",
                        example: "10 / 4 -> 2.5",
                    },
                    {
                        op: "%",
                        text: "Modulus. Remainder after division.",
                        example: "10 % 4 -> 2",
                    },
                    {
                        op: "**",
                        text: "Exponentiation. Power operator.",
                        example: "2 ** 3 -> 8",
                    },
                ],
            },
            {
                key: "assignment",
                title: "Assignment",
                icon: <FiGitCommit />,
                lines: [
                    {
                        op: "=",
                        text: "Assign value to a variable.",
                        example: "$x = 10",
                    },
                    {
                        op: "+=",
                        text: "Add and assign.",
                        example: "$x += 5 -> same as $x = $x + 5",
                    },
                    {
                        op: "-=",
                        text: "Subtract and assign.",
                        example: "$x -= 2 -> same as $x = $x - 2",
                    },
                    {
                        op: ".=",
                        text: "Append string and assign.",
                        example: '$name .= " Ranjan"',
                    },
                ],
            },
            {
                key: "comparison",
                title: "Comparison",
                icon: <FiShuffle />,
                lines: [
                    {
                        op: "==",
                        text: "Equal (loose). May type juggle.",
                        example: '"5" == 5 -> true',
                    },
                    {
                        op: "===",
                        text: "Identical (strict). Value + type must match.",
                        example: '"5" === 5 -> false',
                    },
                    {
                        op: "!=",
                        text: "Not equal (loose).",
                        example: '"5" != 5 -> false',
                    },
                    {
                        op: "!==",
                        text: "Not identical (strict).",
                        example: '"5" !== 5 -> true',
                    },
                    {
                        op: "<",
                        text: "Less than.",
                        example: "3 < 5 -> true",
                    },
                    {
                        op: "<=",
                        text: "Less than or equal.",
                        example: "5 <= 5 -> true",
                    },
                    {
                        op: ">=",
                        text: "Greater than or equal.",
                        example: "7 >= 5 -> true",
                    },
                ],
            },
            {
                key: "logical",
                title: "Logical",
                icon: <FiHash />,
                lines: [
                    {
                        op: "&&",
                        text: "AND. Both conditions must be true.",
                        example: "true && false -> false",
                    },
                    {
                        op: "||",
                        text: "OR. Any one condition true -> true.",
                        example: "true || false -> true",
                    },
                    {
                        op: "!",
                        text: "NOT. Flips boolean.",
                        example: "!true -> false",
                    },
                    {
                        op: "and",
                        text: "AND keyword. Same idea as &&, but lower precedence.",
                        example: "$ok = true and false -> tricky (precedence)",
                    },
                    {
                        op: "or",
                        text: "OR keyword. Same idea as ||, but lower precedence.",
                        example: "$ok = false or true -> tricky (precedence)",
                    },
                ],
            },
            {
                key: "stringOps",
                title: "String Operators",
                icon: <FiType />,
                lines: [
                    {
                        op: ".",
                        text: "Concatenation. Joins strings.",
                        example: '"Hello" . " World" -> "Hello World"',
                    },
                    {
                        op: ".=",
                        text: "Concatenate and assign.",
                        example: '$msg .= "!"',
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
                    <FiCode />
                </span>

                <span className="title">Operators</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiCode />
                        </span>
                        Quick reference for common operators
                    </div>

                    <p className="p">
                        Operators help you calculate, compare, combine, and make
                        decisions. In PHP, remember the difference between loose
                        comparison (==) and strict comparison (===).
                    </p>

                    <div className="note">
                        <div className="noteTitle">Important</div>
                        <div className="noteText">
                            Prefer strict checks (=== and !==) to avoid
                            unexpected type juggling.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {sections.map((sec) => {
                        return (
                            <div className="section" key={sec.key}>
                                <div className="sectionTitle">
                                    <span className="sectionIcon">
                                        {sec.icon}
                                    </span>
                                    {sec.title}
                                </div>

                                <div className="rows">
                                    {sec.lines.map((row, idx) => (
                                        <div
                                            className="row"
                                            key={`${sec.key}-${idx}`}
                                        >
                                            <div className="op">{row.op}</div>
                                            <div className="text">
                                                <div className="desc">
                                                    {row.text}
                                                </div>
                                                <div className="ex">
                                                    <span className="exLabel">
                                                        Example
                                                    </span>
                                                    <span className="mono">
                                                        {row.example}
                                                    </span>
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

export default Operators;
