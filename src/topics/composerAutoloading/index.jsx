// composerAutoloading/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiPackage,
    FiFileText,
    FiDownload,
    FiRefreshCw,
    FiLayers,
    FiCode,
} from "react-icons/fi";

/*
Composer and Autoloading (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Same layout style as your Operators card
*/
const ComposerAutoloading = () => {
    const [open, setOpen] = useState(false);

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
                    <FiPackage />
                </span>

                <span className="title">Composer and Autoloading</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiPackage />
                        </span>
                        PHP dependency manager + clean class loading
                    </div>

                    <p className="p">
                        Composer is the standard way to install PHP libraries
                        and load your classes automatically. It keeps projects
                        clean, scalable, and predictable.
                    </p>

                    <div className="note">
                        <div className="noteTitle">At a glance</div>
                        <div className="noteText">
                            You declare dependencies in{" "}
                            <span className="mono">composer.json</span>, run{" "}
                            <span className="mono">composer install</span>, and
                            include{" "}
                            <span className="mono">vendor/autoload.php</span>.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {/* What is Composer */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiPackage />
                            </span>
                            What is Composer
                        </div>

                        <div className="rows">
                            <div className="row">
                                <div className="op">Purpose</div>
                                <div className="text">
                                    <div className="desc">
                                        Composer manages third party packages
                                        (libraries) for PHP. It downloads them,
                                        locks versions, and generates an
                                        autoloader so you do not write manual
                                        require statements everywhere.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Why</div>
                                <div className="text">
                                    <div className="desc">
                                        Easier dependency installs, consistent
                                        versions across machines, and clean
                                        project structure.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* composer.json */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiFileText />
                            </span>
                            composer.json
                        </div>

                        <div className="rows">
                            <div className="row">
                                <div className="op">What</div>
                                <div className="text">
                                    <div className="desc">
                                        The main config file. It defines project
                                        info, required packages, autoload rules,
                                        and scripts.
                                    </div>

                                    <div className="ex">
                                        <span className="exLabel">
                                            Common keys
                                        </span>
                                        <span className="mono">
                                            require, require-dev, autoload,
                                            scripts
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Rule</div>
                                <div className="text">
                                    <div className="desc">
                                        Do not edit{" "}
                                        <span className="mono">vendor</span>{" "}
                                        files manually. Composer manages that
                                        folder.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Installing packages */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiDownload />
                            </span>
                            Installing packages
                        </div>

                        <div className="rows">
                            <div className="row">
                                <div className="op">Install</div>
                                <div className="text">
                                    <div className="desc">
                                        Installs dependencies listed in{" "}
                                        <span className="mono">
                                            composer.json
                                        </span>{" "}
                                        and creates the{" "}
                                        <span className="mono">vendor</span>{" "}
                                        folder.
                                    </div>

                                    <div className="codeBlock">
                                        <div className="codeTop">
                                            <span className="codeIcon">
                                                <FiCode />
                                            </span>
                                            Command
                                        </div>
                                        <pre className="code">{`composer install`}</pre>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Add</div>
                                <div className="text">
                                    <div className="desc">
                                        Adds a new package and updates{" "}
                                        <span className="mono">
                                            composer.json
                                        </span>{" "}
                                        and{" "}
                                        <span className="mono">
                                            composer.lock
                                        </span>
                                        .
                                    </div>

                                    <div className="codeBlock">
                                        <div className="codeTop">
                                            <span className="codeIcon">
                                                <FiCode />
                                            </span>
                                            Command
                                        </div>
                                        <pre className="code">{`composer require vendor/package`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Autoloading */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiRefreshCw />
                            </span>
                            Autoloading
                        </div>

                        <div className="rows">
                            <div className="row">
                                <div className="op">Meaning</div>
                                <div className="text">
                                    <div className="desc">
                                        Autoloading means PHP loads class files
                                        automatically when you use a class. You
                                        do not write{" "}
                                        <span className="mono">require</span>{" "}
                                        for every class file.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">How</div>
                                <div className="text">
                                    <div className="desc">
                                        Include Composer's autoloader once, then
                                        use classes normally.
                                    </div>

                                    <div className="codeBlock">
                                        <div className="codeTop">
                                            <span className="codeIcon">
                                                <FiCode />
                                            </span>
                                            Include autoloader
                                        </div>
                                        <pre className="code">{`require __DIR__ . "/vendor/autoload.php";`}</pre>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Tip</div>
                                <div className="text">
                                    <div className="desc">
                                        If you update autoload settings, run{" "}
                                        <span className="mono">
                                            composer dump-autoload
                                        </span>{" "}
                                        to regenerate the autoloader.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PSR standards */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiLayers />
                            </span>
                            PSR standards
                        </div>

                        <div className="rows">
                            <div className="row">
                                <div className="op">What</div>
                                <div className="text">
                                    <div className="desc">
                                        PSR means PHP Standards Recommendation.
                                        These are community standards that help
                                        different libraries work together with
                                        consistent code style and autoloading.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Must know</div>
                                <div className="text">
                                    <div className="desc">
                                        <span className="mono">PSR-4</span> is
                                        the most important for autoloading. It
                                        maps namespaces to folder paths.
                                    </div>

                                    <div className="ex">
                                        <span className="exLabel">
                                            Example idea
                                        </span>
                                        <span className="mono">
                                            App\Controllers\UserController
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="op">Outcome</div>
                                <div className="text">
                                    <div className="desc">
                                        Cleaner codebase, predictable file
                                        structure, and easier team work.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Dependencies go in composer.json
                        </li>
                        <li>
                            <span className="checkDot" />
                            Install with composer install
                        </li>
                        <li>
                            <span className="checkDot" />
                            Require vendor/autoload.php once
                        </li>
                        <li>
                            <span className="checkDot" />
                            Follow PSR-4 for namespaces and folders
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ComposerAutoloading;
