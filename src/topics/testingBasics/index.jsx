import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCheckSquare,
    FiCode,
    FiSearch,
    FiFileText,
} from "react-icons/fi";

/*
Testing Basics - PHP Core Notes
Collapsed by default
Fast revision reference
*/

const TestingBasics = () => {
    const [open, setOpen] = useState(false);

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
                    <FiCheckSquare />
                </span>

                <span className="title">Testing Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiCode />
                        </span>
                        Stability and reliability fundamentals
                    </div>

                    <p className="p">
                        Testing ensures your PHP application behaves correctly.
                        It helps detect bugs early and prevents regressions when
                        updating code.
                    </p>
                </div>

                <div className="sections">
                    {/* Unit Testing Concept */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiCheckSquare />
                            </span>
                            Basic Unit Testing Concept
                        </div>

                        <div className="sectionBody">
                            <p>
                                Unit testing means testing small pieces of code
                                independently, usually functions or methods.
                                Each test verifies expected output for a given
                                input.
                            </p>

                            <pre>
                                {`function add($a, $b) {
    return $a + $b;
}

// Expected: 5
add(2, 3);`}
                            </pre>

                            <div className="note">
                                Goal: One function, one behavior, one test.
                            </div>
                        </div>
                    </div>

                    {/* PHPUnit */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiCode />
                            </span>
                            PHPUnit Basics
                        </div>

                        <div className="sectionBody">
                            <p>
                                PHPUnit is the standard testing framework for
                                PHP. It allows automated test execution and
                                assertions.
                            </p>

                            <pre>
                                {`use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase {
    public function testAddition() {
        $this->assertEquals(5, 2 + 3);
    }
}`}
                            </pre>

                            <div className="note">
                                Run tests via: vendor/bin/phpunit
                            </div>
                        </div>
                    </div>

                    {/* var_dump Debugging */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiSearch />
                            </span>
                            Debugging with var_dump
                        </div>

                        <div className="sectionBody">
                            <p>
                                var_dump displays variable type and value.
                                Useful during development for quick inspection.
                            </p>

                            <pre>
                                {`$user = ["name" => "Ash", "age" => 25];
var_dump($user);`}
                            </pre>

                            <div className="note">
                                Avoid leaving var_dump in production code.
                            </div>
                        </div>
                    </div>

                    {/* Logging */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiFileText />
                            </span>
                            Logging
                        </div>

                        <div className="sectionBody">
                            <p>
                                Logging records runtime information to files.
                                Essential for debugging production issues.
                            </p>

                            <pre>{`error_log("Something went wrong");`}</pre>

                            <div className="note">
                                Production apps log errors instead of displaying
                                them.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TestingBasics;
