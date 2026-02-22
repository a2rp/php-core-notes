import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLayers,
    FiMap,
    FiServer,
    FiEye,
    FiDatabase,
    FiFolder,
} from "react-icons/fi";

/*
Project Structure Basics
- Architecture level understanding
- Beginner friendly
- At a glance revision
*/
const ProjectStructureBasics = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "mvc",
                title: "MVC Concept",
                icon: <FiLayers />,
                text: "MVC stands for Model View Controller. It separates application logic into three layers to make code clean and maintainable.",
                bullets: [
                    "Model handles data and database logic",
                    "View handles UI output",
                    "Controller handles request logic and connects model and view",
                    "Separation improves scalability and testing",
                ],
            },
            {
                key: "routing",
                title: "Routing Basics",
                icon: <FiMap />,
                text: "Routing decides which controller runs when a user visits a URL.",
                bullets: [
                    "URL maps to specific controller action",
                    "Example: /users -> UserController",
                    "Helps organize application endpoints",
                    "Common in frameworks like Laravel",
                ],
            },
            {
                key: "controllers",
                title: "Controllers",
                icon: <FiServer />,
                text: "Controllers process user requests. They contain application logic.",
                bullets: [
                    "Receive request data",
                    "Validate inputs",
                    "Call models for data",
                    "Return a view or JSON response",
                ],
            },
            {
                key: "views",
                title: "Views",
                icon: <FiEye />,
                text: "Views handle presentation layer. They generate HTML output.",
                bullets: [
                    "Display data from controller",
                    "Should not contain heavy logic",
                    "Keeps UI separate from backend code",
                    "Usually .php template files",
                ],
            },
            {
                key: "models",
                title: "Models",
                icon: <FiDatabase />,
                text: "Models manage database interaction and business logic.",
                bullets: [
                    "Handle queries and database connection",
                    "Return structured data",
                    "Keep SQL separate from controllers",
                    "Represent application entities",
                ],
            },
            {
                key: "structure",
                title: "Basic Folder Structure",
                icon: <FiFolder />,
                text: "A clean folder structure improves readability and maintainability.",
                bullets: [
                    "public -> entry point index.php",
                    "app/Controllers -> controller classes",
                    "app/Models -> database logic",
                    "app/Views -> templates",
                    "routes -> routing definitions",
                ],
            },
        ];
    }, []);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiLayers />
                </span>

                <span className="title">Project Structure Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Understanding structure is more important than syntax.
                        Good architecture keeps your backend clean, scalable,
                        and maintainable.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="sectionBodyInner">
                                <p className="desc">{sec.text}</p>

                                <ul className="bullets">
                                    {sec.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div className="codeBlock">
                        <div className="codeTitle">
                            Example Folder Structure
                        </div>
                        <pre>
                            {`project/
│
├── public/
│   └── index.php
│
├── app/
│   ├── Controllers/
│   ├── Models/
│   └── Views/
│
└── routes/
    └── web.php`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ProjectStructureBasics;
