// oopPhp/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiCode,
    FiLock,
    FiUsers,
    FiLayers,
    FiShare2,
    FiLink,
    FiCpu,
    FiPackage,
} from "react-icons/fi";

/*
Object Oriented PHP (php-core-notes)
- At-a-glance revision card
- Collapsed by default
- Expand for quick definitions + tiny examples
*/
const OopPhp = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "classesObjects",
                title: "Classes and Objects",
                icon: <FiBox />,
                rows: [
                    {
                        label: "class",
                        text: "Blueprint. Defines properties (data) and methods (behavior).",
                        example: "class User { }",
                    },
                    {
                        label: "object",
                        text: "Instance created from a class using new.",
                        example: "$u = new User();",
                    },
                    {
                        label: "properties",
                        text: "Variables inside a class that store object state.",
                        example: "public string $name;",
                    },
                    {
                        label: "methods",
                        text: "Functions inside a class that operate on object state.",
                        example: "public function greet() { }",
                    },
                    {
                        label: "constructor",
                        text: "Runs automatically on object creation. Use it to set initial state.",
                        example: "public function __construct($name) { }",
                    },
                    {
                        label: "destructor",
                        text: "Runs when object is destroyed. Rarely needed in PHP, but used for cleanup.",
                        example: "public function __destruct() { }",
                    },
                ],
            },
            {
                key: "accessModifiers",
                title: "Access Modifiers",
                icon: <FiLock />,
                rows: [
                    {
                        label: "public",
                        text: "Accessible from anywhere. Default intent for APIs you expose.",
                        example: "public function run() { }",
                    },
                    {
                        label: "private",
                        text: "Accessible only inside the same class. Hides internal details.",
                        example: "private string $token;",
                    },
                    {
                        label: "protected",
                        text: "Accessible in the class and its child classes. Useful for inheritance.",
                        example: "protected function build() { }",
                    },
                ],
            },
            {
                key: "oopConcepts",
                title: "OOP Concepts",
                icon: <FiLayers />,
                rows: [
                    {
                        label: "Encapsulation",
                        text: "Keep data safe by hiding internals and exposing controlled methods.",
                        example: "private $balance + public deposit()",
                    },
                    {
                        label: "Inheritance",
                        text: "A child class can reuse and extend a parent class.",
                        example: "class Admin extends User",
                    },
                    {
                        label: "Polymorphism",
                        text: "Same method name, different behavior (usually via inheritance or interfaces).",
                        example: "->pay() works for CardPay, UpiPay",
                    },
                    {
                        label: "Abstraction",
                        text: "Hide implementation, expose only essential behavior (abstract class or interface).",
                        example: "abstract class Shape { abstract area(); }",
                    },
                    {
                        label: "Interfaces",
                        text: "A contract. Classes must implement required methods.",
                        example:
                            "interface Logger { public function log($m); }",
                    },
                    {
                        label: "Traits",
                        text: "Reusable code blocks you can include in multiple classes (no inheritance needed).",
                        example: "use HasTimestamps;",
                    },
                ],
            },
            {
                key: "static",
                title: "Static properties and methods",
                icon: <FiCpu />,
                rows: [
                    {
                        label: "static",
                        text: "Belongs to the class itself, not a specific object. Access using ::.",
                        example: "Config::$env or Config::get()",
                    },
                ],
            },
            {
                key: "namespaces",
                title: "Namespaces",
                icon: <FiPackage />,
                rows: [
                    {
                        label: "namespace",
                        text: "Organizes code and prevents name conflicts. Common in real projects and Composer.",
                        example: "namespace App\\Services;",
                    },
                    {
                        label: "use",
                        text: "Imports a class with shorter name (alias optional).",
                        example: "use App\\Services\\Mail;",
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
                    <FiUsers />
                </span>

                <span className="title">Object Oriented PHP</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiCode />
                        </span>
                        OOP basics in one view
                    </div>

                    <p className="p">
                        OOP helps you structure code using reusable objects. You
                        model real features as classes, keep internals private,
                        and expose clear methods. This keeps projects
                        maintainable as they grow.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Quick rule</div>
                        <div className="noteText">
                            Keep properties private by default, and expose
                            behavior through methods. Prefer composition and
                            interfaces when possible.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="rows">
                                {sec.rows.map((row, idx) => (
                                    <div
                                        className="row"
                                        key={`${sec.key}-${idx}`}
                                    >
                                        <div className="label">{row.label}</div>

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

                            {sec.key === "oopConcepts" && (
                                <div className="miniCallout">
                                    <div className="miniCalloutTitle">
                                        <span className="miniIcon">
                                            <FiLink />
                                        </span>
                                        How these connect
                                    </div>
                                    <div className="miniCalloutText">
                                        Interfaces define behavior. Classes
                                        implement that behavior. Traits share
                                        reusable code. Access modifiers protect
                                        internals. Together, they keep large PHP
                                        projects clean.
                                    </div>
                                </div>
                            )}

                            {sec.key === "namespaces" && (
                                <div className="miniCallout">
                                    <div className="miniCalloutTitle">
                                        <span className="miniIcon">
                                            <FiShare2 />
                                        </span>
                                        Real world usage
                                    </div>
                                    <div className="miniCalloutText">
                                        Namespaces are standard in Composer
                                        projects. One folder usually maps to one
                                        namespace prefix, which keeps class
                                        names predictable.
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default OopPhp;
