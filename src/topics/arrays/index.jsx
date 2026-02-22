// arrays/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiGrid,
    FiList,
    FiHash,
    FiLayers,
    FiTool,
} from "react-icons/fi";

/*
Arrays (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Expand for quick examples and reminders
*/
const Arrays = () => {
    const [open, setOpen] = useState(false);

    const blocks = useMemo(() => {
        return [
            {
                key: "indexed",
                title: "Indexed Arrays",
                icon: <FiList />,
                desc: "Values are stored with numeric keys starting from 0.",
                exampleTitle: "Example",
                example: "$nums = [10, 20, 30];\n$nums[0] -> 10",
                tips: ["Best for ordered lists", "Use [] to append new item"],
            },
            {
                key: "associative",
                title: "Associative Arrays",
                icon: <FiHash />,
                desc: "Values are stored with custom string keys (key-value pairs).",
                exampleTitle: "Example",
                example:
                    '$user = ["name" => "Ash", "role" => "Dev"];\n$user["name"] -> "Ash"',
                tips: [
                    "Best for objects-like data",
                    "Keys are usually strings",
                ],
            },
            {
                key: "multi",
                title: "Multidimensional Arrays",
                icon: <FiLayers />,
                desc: "Arrays inside arrays. Useful for tables, lists of objects, nested data.",
                exampleTitle: "Example",
                example:
                    '$users = [\n  ["name" => "A", "age" => 20],\n  ["name" => "B", "age" => 22]\n];\n$users[1]["name"] -> "B"',
                tips: [
                    "Common in API responses",
                    "Loop using foreach for readability",
                ],
            },
            {
                key: "functions",
                title: "Array Functions",
                icon: <FiTool />,
                desc: "Most used built-in functions for real projects.",
                rows: [
                    {
                        fn: "count",
                        use: "Get total number of items in array.",
                        ex: "count([1,2,3]) -> 3",
                    },
                    {
                        fn: "array_push",
                        use: "Add one or more items to the end.",
                        ex: "array_push($arr, 4, 5)",
                    },
                    {
                        fn: "array_pop",
                        use: "Remove and return last item.",
                        ex: "array_pop($arr)",
                    },
                    {
                        fn: "array_merge",
                        use: "Merge arrays into one.",
                        ex: "array_merge($a, $b)",
                    },
                    {
                        fn: "array_keys",
                        use: "Get all keys from an array.",
                        ex: 'array_keys(["a"=>1,"b"=>2]) -> ["a","b"]',
                    },
                    {
                        fn: "array_values",
                        use: "Get all values (reindexes numeric keys).",
                        ex: 'array_values(["a"=>1,"b"=>2]) -> [1,2]',
                    },
                    {
                        fn: "in_array",
                        use: "Check if value exists in array.",
                        ex: 'in_array("red", ["red","blue"]) -> true',
                    },
                    {
                        fn: "explode",
                        use: "Split string into array by delimiter.",
                        ex: 'explode(",", "a,b,c") -> ["a","b","c"]',
                    },
                    {
                        fn: "implode",
                        use: "Join array into string with delimiter.",
                        ex: 'implode("-", ["a","b","c"]) -> "a-b-c"',
                    },
                    {
                        fn: "sort",
                        use: "Sort values and reindex keys (ascending).",
                        ex: "sort($nums)",
                    },
                    {
                        fn: "asort",
                        use: "Sort by values but keep keys (ascending).",
                        ex: "asort($scores)",
                    },
                    {
                        fn: "ksort",
                        use: "Sort by keys (ascending).",
                        ex: "ksort($user)",
                    },
                ],
                noteTitle: "Quick reminder",
                noteText:
                    "sort resets keys. Use asort if you must preserve key-value mapping. Use ksort when key order matters.",
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
                    <FiGrid />
                </span>

                <span className="title">Arrays</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiCode />
                        </span>
                        Most used data structure in PHP
                    </div>

                    <p className="p">
                        PHP arrays are very flexible. They can behave like lists
                        (indexed arrays) and like objects/maps (associative
                        arrays). Many real apps use nested arrays for data and
                        API responses.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Best practice</div>
                        <div className="noteText">
                            Use associative arrays for named fields. Use indexed
                            arrays for ordered lists. Keep nesting readable.
                        </div>
                    </div>
                </div>

                <div className="cards">
                    {blocks
                        .filter((b) => b.key !== "functions")
                        .map((b) => (
                            <div className="card" key={b.key}>
                                <div className="cardTitle">
                                    <span className="cardIcon">{b.icon}</span>
                                    {b.title}
                                </div>

                                <p className="cardDesc">{b.desc}</p>

                                <div className="codeBlock">
                                    <div className="codeTop">
                                        <span className="codeIcon">
                                            <FiCode />
                                        </span>
                                        {b.exampleTitle}
                                    </div>
                                    <pre className="code">{b.example}</pre>
                                </div>

                                <ul className="tips">
                                    {b.tips.map((t, idx) => (
                                        <li key={`${b.key}-tip-${idx}`}>
                                            <span className="dot" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>

                <div className="functions">
                    {blocks
                        .filter((b) => b.key === "functions")
                        .map((b) => (
                            <div className="funcWrap" key={b.key}>
                                <div className="funcTitle">
                                    <span className="funcIcon">{b.icon}</span>
                                    {b.title}
                                </div>

                                <p className="funcDesc">{b.desc}</p>

                                <div className="funcTable">
                                    {b.rows.map((r, idx) => (
                                        <div
                                            className="funcRow"
                                            key={`fn-${idx}`}
                                        >
                                            <div className="fnName">{r.fn}</div>
                                            <div className="fnInfo">
                                                <div className="fnUse">
                                                    {r.use}
                                                </div>
                                                <div className="fnEx">
                                                    <span className="exLabel">
                                                        Example
                                                    </span>
                                                    <span className="mono">
                                                        {r.ex}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="note">
                                    <div className="noteTitle">
                                        {b.noteTitle}
                                    </div>
                                    <div className="noteText">{b.noteText}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Arrays;
