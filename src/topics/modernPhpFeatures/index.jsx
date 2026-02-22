// modernPhpFeatures/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiCode,
    FiShield,
    FiHash,
    FiCornerUpRight,
    FiTag,
    FiLayers,
    FiShuffle,
    FiBox,
} from "react-icons/fi";

/*
Modern PHP Features (PHP Core Notes)
- At a glance revision card
- Collapsed by default
- Expand for quick reminders + mini examples
*/
const ModernPhpFeatures = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "strictTypes",
                title: "Strict types",
                icon: <FiShield />,
                what: "Forces PHP to respect parameter and return types more strictly.",
                why: "Reduces silent type juggling and catches mistakes early.",
                code: `<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

add(2, 3);       // ok
add("2", "3");   // TypeError in strict mode
?>`,
                note: "declare(strict_types=1) must be the first statement in the file (after <?php).",
            },
            {
                key: "typedProps",
                title: "Typed properties",
                icon: <FiHash />,
                what: "Class properties can have types like int, string, array, ?string.",
                why: "Makes objects safer and clearer, less guessing at runtime.",
                code: `<?php
class User {
    public int $id;
    public string $name;
    public ?string $email = null;
}
?>`,
                note: "Use ?type for nullable. Accessing an uninitialized typed property causes an error.",
            },
            {
                key: "returnTypes",
                title: "Return types",
                icon: <FiCornerUpRight />,
                what: "Functions can declare what they return: int, string, array, void, mixed, ?User.",
                why: "Prevents accidental wrong returns and improves readability.",
                code: `<?php
function getCount(): int {
    return 10;
}

function logMessage(string $msg): void {
    // no return
}
?>`,
                note: "If return type is declared and you return a different type, PHP throws a TypeError (especially strict mode).",
            },
            {
                key: "nullCoalescing",
                title: "Null coalescing operator ??",
                icon: <FiLayers />,
                what: "Provides a default when a value is null or not set.",
                why: "Cleaner than isset() checks for defaults.",
                code: `<?php
$name = $_GET["name"] ?? "Guest";

$theme = $config["theme"] ?? "dark";
?>`,
                note: "?? checks only for null / unset, not for empty string or 0.",
            },
            {
                key: "spaceship",
                title: "Spaceship operator <=>",
                icon: <FiShuffle />,
                what: "Compares two values and returns -1, 0, or 1.",
                why: "Perfect for sorting callbacks.",
                code: `<?php
// returns -1 if $a < $b
// returns  0 if $a == $b
// returns  1 if $a > $b
$result = 10 <=> 20; // -1

usort($nums, fn($a, $b) => $a <=> $b);
?>`,
                note: "Commonly used with usort and custom ordering logic.",
            },
            {
                key: "attributes",
                title: "Attributes",
                icon: <FiTag />,
                what: "Modern metadata system using #[] instead of docblock annotations.",
                why: "Used in frameworks for routing, validation, DI, etc.",
                code: `<?php
#[Attribute]
class Route {
    public function __construct(public string $path) {}
}

class UserController {
    #[Route("/users")]
    public function index() {}
}
?>`,
                note: "Attributes are read using reflection. Common in modern PHP frameworks.",
            },
            {
                key: "enums",
                title: "Enums",
                icon: <FiBox />,
                what: "A safe way to represent a fixed set of values.",
                why: "Prevents invalid states like status = 'donee' typo.",
                code: `<?php
enum Status: string {
    case Pending = "pending";
    case Paid = "paid";
    case Failed = "failed";
}

$status = Status::Paid;
?>`,
                note: "Enums improve correctness in business logic and APIs.",
            },
            {
                key: "match",
                title: "Match expression",
                icon: <FiCode />,
                what: "Cleaner alternative to switch, returns a value and uses strict comparisons.",
                why: "Less boilerplate, fewer bugs, no fallthrough.",
                code: `<?php
$type = "admin";

$label = match ($type) {
    "admin" => "Full access",
    "user" => "Limited access",
    default => "Guest",
};
?>`,
                note: "match uses strict comparison (===) by default.",
            },
            {
                key: "constructorPromotion",
                title: "Constructor property promotion",
                icon: <FiZap />,
                what: "Declare + assign class properties directly in constructor params.",
                why: "Cuts boilerplate and keeps classes clean.",
                code: `<?php
class Product {
    public function __construct(
        public int $id,
        public string $name,
        public float $price
    ) {}
}
?>`,
                note: "Great for DTOs and simple models. Use readonly when needed for immutability (modern PHP).",
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
                    <FiZap />
                </span>

                <span className="title">Modern PHP Features</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiZap />
                        </span>
                        Modern PHP = safer code, less boilerplate
                    </div>

                    <p className="p">
                        These features help you write cleaner and more reliable
                        PHP. If you know these, your code looks modern and
                        avoids common runtime bugs.
                    </p>

                    <div className="note">
                        <div className="noteTitle">Quick rule</div>
                        <div className="noteText">
                            Prefer strict types, typed properties, and return
                            types for predictability. Use match and enums for
                            safer business logic.
                        </div>
                    </div>
                </div>

                <div className="sections">
                    {sections.map((sec) => {
                        return (
                            <div className="section" key={sec.key}>
                                <div className="sectionTitle">
                                    <span className="sectionIcon">
                                        {sec.icon}
                                    </span>
                                    {sec.title}
                                </div>

                                <div className="content">
                                    <div className="block">
                                        <div className="label">What it is</div>
                                        <div className="text">{sec.what}</div>
                                    </div>

                                    <div className="block">
                                        <div className="label">
                                            Why it matters
                                        </div>
                                        <div className="text">{sec.why}</div>
                                    </div>

                                    <div className="codeBlock">
                                        <div className="codeTop">
                                            <span className="codeIcon">
                                                <FiCode />
                                            </span>
                                            Example
                                        </div>
                                        <pre className="code">{sec.code}</pre>
                                    </div>

                                    <div className="tip">
                                        <span className="tipLabel">Tip</span>
                                        <span className="tipText">
                                            {sec.note}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Fast revision checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Use strict types for fewer surprises
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use typed properties and return types
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use ?? for defaults and match for mapping
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use enums for status and roles
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ModernPhpFeatures;
