// performanceBasics/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiDatabase,
    FiLayers,
    FiCpu,
    FiCode,
    FiTrendingUp,
} from "react-icons/fi";

/*
Performance Basics - PHP Core Notes
- Collapsed by default
- At-a-glance revision
- Same layout style as other sections
*/

const PerformanceBasics = () => {
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
                    <FiZap />
                </span>

                <span className="title">Performance Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiTrendingUp />
                        </span>
                        Faster pages, fewer server hits
                    </div>

                    <p className="p">
                        Performance is mostly about doing less work: fewer DB
                        calls, less repeated computation, and letting caching do
                        its job. Focus on the biggest bottlenecks first.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Rule of thumb</div>
                        <div className="noteText">
                            Database calls are usually slower than PHP code.
                            Reduce queries first, then optimize code.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {/* Caching basics */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiLayers />
                            </span>
                            Caching basics
                        </div>

                        <div className="sectionBody">
                            <p>
                                Caching stores results so you do not recompute
                                or refetch them on every request. Cache can be
                                at browser level, server level, or application
                                level.
                            </p>

                            <ul>
                                <li>
                                    Browser caching for static files (CSS, JS,
                                    images)
                                </li>
                                <li>
                                    Server caching for generated pages or API
                                    responses
                                </li>
                                <li>
                                    App caching for expensive DB queries or
                                    computed results
                                </li>
                            </ul>

                            <div className="note">
                                Cache only when data does not change too often,
                                and always plan cache invalidation.
                            </div>
                        </div>
                    </div>

                    {/* Output buffering */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiCode />
                            </span>
                            Output buffering
                        </div>

                        <div className="sectionBody">
                            <p>
                                Output buffering lets PHP collect output in
                                memory before sending it to the browser. This
                                helps when you want to modify output later or
                                control headers before content is sent.
                            </p>

                            <pre>
                                {`ob_start();

echo "Hello";
$content = ob_get_clean(); // gets output and clears buffer

// now you can modify $content or cache it`}
                            </pre>

                            <div className="note">
                                Useful for templating, caching full HTML, and
                                avoiding "headers already sent" issues.
                            </div>
                        </div>
                    </div>

                    {/* OPcache */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiCpu />
                            </span>
                            OPcache
                        </div>

                        <div className="sectionBody">
                            <p>
                                OPcache is a PHP extension that stores compiled
                                script bytecode in memory. This avoids parsing
                                and compiling PHP files on every request.
                            </p>

                            <pre>
                                {`; php.ini (example)
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000`}
                            </pre>

                            <div className="note">
                                Enable OPcache in production. It gives big speed
                                wins with almost zero code changes.
                            </div>
                        </div>
                    </div>

                    {/* Reducing DB calls */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiDatabase />
                            </span>
                            Reducing DB calls
                        </div>

                        <div className="sectionBody">
                            <p>
                                Too many DB queries slow down requests. Try to
                                fetch only what you need, and reduce repeated
                                queries in loops.
                            </p>

                            <ul>
                                <li>Use indexes for common WHERE columns</li>
                                <li>
                                    Fetch only required columns (avoid SELECT *)
                                </li>
                                <li>
                                    Batch queries instead of querying inside
                                    loops
                                </li>
                                <li>Cache frequently used results</li>
                            </ul>

                            <div className="note">
                                If you see queries inside a loop, it is usually
                                a performance red flag.
                            </div>
                        </div>
                    </div>

                    {/* Code optimization */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiZap />
                            </span>
                            Code optimization
                        </div>

                        <div className="sectionBody">
                            <p>
                                Optimize only after measuring. Keep code simple,
                                avoid heavy work on every request, and use built
                                in functions where possible.
                            </p>

                            <ul>
                                <li>Profile first, then optimize</li>
                                <li>Reuse computed values</li>
                                <li>Avoid unnecessary loops and conversions</li>
                                <li>Use prepared statements for DB queries</li>
                                <li>
                                    Move heavy tasks to background jobs when
                                    needed
                                </li>
                            </ul>

                            <div className="note">
                                Biggest wins usually come from caching + fewer
                                DB calls, not micro optimizations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PerformanceBasics;
