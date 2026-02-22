import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiServer,
    FiSettings,
    FiFileText,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

/*
Deployment Basics - PHP Core Notes
Collapsed by default
At-a-glance revision
*/

const DeploymentBasics = () => {
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
                    <FiServer />
                </span>

                <span className="title">Deployment Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiCode />
                        </span>
                        Production fundamentals checklist
                    </div>

                    <p className="p">
                        Deployment is the process of moving your PHP application
                        from local development to a live production server. It
                        requires environment configuration, security settings,
                        and proper server setup.
                    </p>
                </div>

                <div className="sections">
                    {/* .env */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiFileText />
                            </span>
                            .env files
                        </div>

                        <div className="sectionBody">
                            <p>
                                Environment files store sensitive configuration
                                like database credentials, API keys, and secret
                                tokens. These should never be committed to
                                version control.
                            </p>

                            <pre>
                                {`DB_HOST=localhost
DB_NAME=app_db
DB_USER=root
DB_PASS=secret`}
                            </pre>

                            <div className="note">
                                Keep .env outside public directory and add it to
                                .gitignore.
                            </div>
                        </div>
                    </div>

                    {/* Server Configuration */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiSettings />
                            </span>
                            Server Configuration
                        </div>

                        <div className="sectionBody">
                            <p>
                                A PHP app runs through a web server like Apache
                                or Nginx. The server must be configured to point
                                to your project’s public directory as the
                                document root.
                            </p>

                            <div className="note">
                                Only expose the public folder, never the full
                                project root.
                            </div>
                        </div>
                    </div>

                    {/* Apache vs Nginx */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiServer />
                            </span>
                            Apache vs Nginx
                        </div>

                        <div className="sectionBody">
                            <p>
                                Apache uses .htaccess files for per-directory
                                configuration. Nginx uses centralized
                                configuration files.
                            </p>

                            <ul>
                                <li>
                                    Apache - simpler setup, supports .htaccess
                                </li>
                                <li>Nginx - faster under heavy load</li>
                            </ul>
                        </div>
                    </div>

                    {/* .htaccess */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiFileText />
                            </span>
                            .htaccess basics
                        </div>

                        <div className="sectionBody">
                            <p>
                                .htaccess allows URL rewriting, redirects,
                                access control, and security rules in Apache.
                            </p>

                            <pre>
                                {`RewriteEngine On
RewriteRule ^$ index.php [L]
RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]`}
                            </pre>

                            <div className="note">
                                Used for clean URLs and routing in PHP apps.
                            </div>
                        </div>
                    </div>

                    {/* Production Errors */}
                    <div className="section">
                        <div className="sectionTitle">
                            <span className="sectionIcon">
                                <FiAlertTriangle />
                            </span>
                            Production error settings
                        </div>

                        <div className="sectionBody">
                            <p>
                                In production, never display errors to users.
                                Log errors instead.
                            </p>

                            <pre>
                                {`display_errors = Off
log_errors = On`}
                            </pre>

                            <div className="note">
                                Showing errors in production exposes sensitive
                                information.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DeploymentBasics;
