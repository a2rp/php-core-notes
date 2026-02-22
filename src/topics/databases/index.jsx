import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiDatabase,
    FiShield,
    FiLock,
    FiCode,
} from "react-icons/fi";

/*
Working with Databases - MySQL (PHP Core Notes)
Collapsed by default
Quick backend revision card
*/

const WorkingWithDatabases = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "mysqlBasics",
                title: "MySQL Basics",
                icon: <FiDatabase />,
                content:
                    "MySQL is a relational database used to store structured data in tables. PHP communicates with MySQL to perform CRUD operations.",
            },
            {
                key: "mysqli",
                title: "Connecting with mysqli",
                icon: <FiCode />,
                code: `<?php
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error) {
    die("Connection failed");
}
?>`,
            },
            {
                key: "pdo",
                title: "Connecting with PDO",
                icon: <FiCode />,
                code: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>`,
            },
            {
                key: "prepared",
                title: "Prepared Statements",
                icon: <FiShield />,
                content:
                    "Prepared statements separate SQL logic from user input. This prevents SQL injection attacks.",
                code: `<?php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();
?>`,
            },
            {
                key: "fetching",
                title: "Fetching Data",
                icon: <FiDatabase />,
                code: `<?php
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>`,
            },
            {
                key: "insert",
                title: "Insert",
                icon: <FiDatabase />,
                code: `<?php
$stmt = $pdo->prepare("INSERT INTO users(name, email) VALUES(?, ?)");
$stmt->execute([$name, $email]);
?>`,
            },
            {
                key: "update",
                title: "Update",
                icon: <FiDatabase />,
                code: `<?php
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute([$name, $id]);
?>`,
            },
            {
                key: "delete",
                title: "Delete",
                icon: <FiDatabase />,
                code: `<?php
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);
?>`,
            },
            {
                key: "security",
                title: "Security Essentials",
                icon: <FiLock />,
                content:
                    "Never trust user input. Always validate, sanitize, and use prepared statements.",
            },
            {
                key: "sqlInjection",
                title: "SQL Injection",
                icon: <FiShield />,
                content:
                    "SQL injection happens when raw user input modifies your SQL query. Prepared statements prevent this by binding parameters safely.",
            },
            {
                key: "escaping",
                title: "Escaping",
                icon: <FiShield />,
                content:
                    "Escaping converts special characters into safe versions. Use built in functions instead of manual escaping whenever possible.",
            },
            {
                key: "passwordHash",
                title: "Password Hashing",
                icon: <FiLock />,
                code: `<?php
$hash = password_hash($password, PASSWORD_DEFAULT);
?>`,
            },
            {
                key: "passwordVerify",
                title: "Password Verify",
                icon: <FiLock />,
                code: `<?php
if (password_verify($password, $hash)) {
    echo "Login success";
}
?>`,
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
                    <FiDatabase />
                </span>

                <span className="title">Working with Databases (MySQL)</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        PHP interacts with MySQL to perform CRUD operations.
                        Always use prepared statements and password hashing in
                        real applications.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="sectionContent">
                                {sec.content && (
                                    <p className="p">{sec.content}</p>
                                )}

                                {sec.code && (
                                    <pre>
                                        <code>{sec.code}</code>
                                    </pre>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default WorkingWithDatabases;
