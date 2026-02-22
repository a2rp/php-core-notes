import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiLayout,
    FiLayers,
    FiPackage,
    FiBox,
} from "react-icons/fi";

const PhpHtmlIntegration = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "embedding",
                title: "Embedding PHP in HTML",
                icon: <FiCode />,
                content: `
PHP can be written directly inside HTML using <?php ... ?> tags.
The server executes PHP first, then sends pure HTML to the browser.
                `,
                example: `
<!-- example.php -->
<h1>Welcome</h1>

<?php
$name = "Ashish";
echo "<p>Hello " . $name . "</p>";
?>
                `,
            },
            {
                key: "templating",
                title: "Templating basics",
                icon: <FiLayout />,
                content: `
PHP can act as a simple templating engine.
You mix dynamic data into HTML using echo or shorthand syntax.
                `,
                example: `
<?php $title = "Dashboard"; ?>

<h1><?= $title ?></h1>

<?php if ($isLoggedIn): ?>
    <p>Welcome back</p>
<?php endif; ?>
                `,
            },
            {
                key: "buffering",
                title: "Output buffering",
                icon: <FiPackage />,
                content: `
Output buffering stores output in memory before sending it to the browser.
Useful for modifying headers or capturing template output.
                `,
                example: `
<?php
ob_start();
echo "<h1>Hello</h1>";
$content = ob_get_clean();
?>
                `,
            },
            {
                key: "separation",
                title: "Separating logic and view",
                icon: <FiLayers />,
                content: `
Best practice: keep business logic separate from HTML.
Controller handles data.
View displays it.
Avoid heavy PHP logic inside HTML templates.
                `,
                example: `
<?php
// controller.php
$user = ["name" => "Ashish"];
include "view.php";
?>

<!-- view.php -->
<h1><?= $user["name"] ?></h1>
                `,
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiBox />
                </span>

                <span className="title">PHP and HTML Integration</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {sections.map((sec) => (
                    <div className="section" key={sec.key}>
                        <div className="sectionTitle">
                            <span className="sectionIcon">{sec.icon}</span>
                            {sec.title}
                        </div>

                        <p className="desc">{sec.content}</p>

                        <pre>
                            <code>{sec.example}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default PhpHtmlIntegration;
