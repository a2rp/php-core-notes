// dataTypes/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiType,
    FiHash,
    FiBox,
    FiCheckCircle,
} from "react-icons/fi";

/*
Data Types (PHP Core Notes)
- Collapsed by default
- At a glance explanations
- Quick examples
*/
const DataTypes = () => {
    const [open, setOpen] = useState(false);

    const types = useMemo(() => {
        return [
            {
                title: "String",
                icon: <FiType />,
                desc: "Text data enclosed in single or double quotes.",
                ex: '$name = "Ashish";',
            },
            {
                title: "Integer",
                icon: <FiHash />,
                desc: "Whole numbers without decimals.",
                ex: "$age = 25;",
            },
            {
                title: "Float",
                icon: <FiHash />,
                desc: "Numbers with decimal points.",
                ex: "$price = 99.99;",
            },
            {
                title: "Boolean",
                icon: <FiCheckCircle />,
                desc: "Represents true or false.",
                ex: "$isLoggedIn = true;",
            },
            {
                title: "Array",
                icon: <FiBox />,
                desc: "Collection of multiple values.",
                ex: '$colors = ["red", "blue"];',
            },
            {
                title: "NULL",
                icon: <FiBox />,
                desc: "Represents a variable with no value.",
                ex: "$data = null;",
            },
            {
                title: "Resource",
                icon: <FiBox />,
                desc: "Special type holding external resources like file handles or database connections.",
                ex: '$file = fopen("test.txt", "r");',
            },
            {
                title: "Object",
                icon: <FiBox />,
                desc: "Instance of a class containing properties and methods.",
                ex: "$user = new User();",
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

                <span className="icon">
                    <FiCode />
                </span>

                <span className="title">Data Types</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p>
                        PHP is dynamically typed. A variable can hold different
                        types at runtime. Understanding types prevents bugs and
                        unexpected behavior.
                    </p>
                </div>

                <div className="section">
                    <div className="sectionTitle">Core Data Types</div>

                    {types.map((t, i) => (
                        <div className="row" key={i}>
                            <div className="left">
                                <span className="typeIcon">{t.icon}</span>
                                <span className="typeName">{t.title}</span>
                            </div>

                            <div className="right">
                                <div className="desc">{t.desc}</div>
                                <div className="example">
                                    <span className="exLabel">Example</span>
                                    <span className="mono">{t.ex}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section">
                    <div className="sectionTitle">Type Checking</div>

                    <div className="row">
                        <div className="right">
                            <div className="desc">
                                <strong>var_dump()</strong> shows value and
                                type.
                            </div>
                            <div className="mono">var_dump($name);</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="right">
                            <div className="desc">
                                <strong>gettype()</strong> returns type as
                                string.
                            </div>
                            <div className="mono">gettype($age);</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="right">
                            <div className="desc">
                                Type check helpers: is_string, is_array, is_int
                            </div>
                            <div className="mono">
                                is_string($name);
                                {"  "}
                                is_array($colors);
                                {"  "}
                                is_int($age);
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionTitle">Type Casting</div>

                    <div className="row">
                        <div className="right">
                            <div className="desc">
                                Convert value to specific type.
                            </div>
                            <div className="mono">
                                (int)$value {"  "}
                                (string)$value {"  "}
                                (bool)$value {"  "}
                                (float)$value
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DataTypes;
