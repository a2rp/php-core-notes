import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGitBranch,
    FiRepeat,
    FiCode,
} from "react-icons/fi";

/*
Control Structures - PHP Core Notes
Collapsed by default
Quick revision style
*/
const ControlStructures = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "conditionals",
                title: "Conditionals",
                icon: <FiGitBranch />,
                items: [
                    {
                        name: "if",
                        desc: "Execute block if condition is true.",
                        example: "if ($age >= 18) { echo 'Adult'; }",
                    },
                    {
                        name: "else",
                        desc: "Runs when if condition is false.",
                        example: "else { echo 'Minor'; }",
                    },
                    {
                        name: "elseif",
                        desc: "Multiple condition checks.",
                        example: "elseif ($age >= 13) { echo 'Teen'; }",
                    },
                    {
                        name: "switch",
                        desc: "Compare one value against multiple cases.",
                        example: "switch ($role) { case 'admin': break; }",
                    },
                    {
                        name: "match",
                        desc: "Modern PHP expression. Strict comparison and returns value.",
                        example:
                            "$label = match($status) { 200 => 'OK', 404 => 'Not Found' };",
                    },
                ],
            },
            {
                key: "loops",
                title: "Loops",
                icon: <FiRepeat />,
                items: [
                    {
                        name: "while",
                        desc: "Runs while condition is true.",
                        example: "while ($i < 5) { $i++; }",
                    },
                    {
                        name: "do while",
                        desc: "Executes at least once before checking condition.",
                        example: "do { $i++; } while ($i < 5);",
                    },
                    {
                        name: "for",
                        desc: "Loop with counter initialization, condition, increment.",
                        example: "for ($i = 0; $i < 5; $i++) { }",
                    },
                    {
                        name: "foreach",
                        desc: "Best for arrays and collections.",
                        example: "foreach ($users as $user) { echo $user; }",
                    },
                    {
                        name: "break",
                        desc: "Exit loop or switch immediately.",
                        example: "if ($i == 3) break;",
                    },
                    {
                        name: "continue",
                        desc: "Skip current iteration and move to next.",
                        example: "if ($i == 3) continue;",
                    },
                ],
            },
        ];
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className="header"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiCode />
                </span>

                <span className="title">Control Structures</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`body ${open ? "open" : ""}`}>
                <div className="intro">
                    Control structures control execution flow. They decide what
                    runs and how many times it runs.
                </div>

                {sections.map((section) => (
                    <div className="section" key={section.key}>
                        <div className="sectionTitle">
                            <span className="sectionIcon">{section.icon}</span>
                            {section.title}
                        </div>

                        {section.items.map((item, i) => (
                            <div className="row" key={i}>
                                <div className="keyword">{item.name}</div>

                                <div className="content">
                                    <div className="desc">{item.desc}</div>

                                    <div className="example">
                                        <span className="label">Example</span>
                                        <span className="mono">
                                            {item.example}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default ControlStructures;
