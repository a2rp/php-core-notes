import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiServer,
    FiDatabase,
    FiSend,
    FiLayers,
} from "react-icons/fi";

/*
Working with JSON and APIs
- Collapsed by default
- Designed for quick backend revision
*/
const WorkingWithJsonApis = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                key: "jsonEncode",
                title: "json_encode",
                icon: <FiDatabase />,
                content:
                    "Converts PHP arrays or objects into JSON string format. Used when sending structured data to frontend or API clients.",
                example: `
$data = ["name" => "Ash", "age" => 25];
echo json_encode($data);
`,
            },
            {
                key: "jsonDecode",
                title: "json_decode",
                icon: <FiDatabase />,
                content:
                    "Converts JSON string into PHP data. By default returns object. Pass true to get associative array.",
                example: `
$json = '{"name":"Ash","age":25}';
$data = json_decode($json, true);
echo $data["name"];
`,
            },
            {
                key: "createApi",
                title: "Creating API endpoints",
                icon: <FiServer />,
                content:
                    "An API endpoint is simply a PHP file that returns JSON instead of HTML. It processes request and responds with structured data.",
                example: `
header("Content-Type: application/json");

$response = ["status" => "success"];
echo json_encode($response);
`,
            },
            {
                key: "requestBody",
                title: "Reading request body",
                icon: <FiSend />,
                content:
                    "For JSON requests, data is not available in $_POST. You must read raw input using php://input.",
                example: `
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
`,
            },
            {
                key: "headers",
                title: "Setting headers",
                icon: <FiLayers />,
                content:
                    "Headers define how client interprets response. Most APIs must set correct Content-Type.",
                example: `
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
`,
            },
            {
                key: "contentType",
                title: "Content-Type",
                icon: <FiLayers />,
                content:
                    "Content-Type tells client what format response is. For APIs use application/json.",
                example: `
header("Content-Type: application/json");
`,
            },
            {
                key: "restBasics",
                title: "REST basics",
                icon: <FiCode />,
                content:
                    "REST uses HTTP methods to perform actions. GET read. POST create. PUT update. DELETE remove. URL represents resource.",
                example: `
GET /users
POST /users
PUT /users/1
DELETE /users/1
`,
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
                    <FiServer />
                </span>

                <span className="title">Working with JSON and APIs</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        JSON is the standard format for data exchange in modern
                        web applications. PHP can generate and read JSON easily,
                        making it simple to build APIs.
                    </p>
                </div>

                <div className="sections">
                    {sections.map((sec) => (
                        <div className="section" key={sec.key}>
                            <div className="sectionTitle">
                                <span className="sectionIcon">{sec.icon}</span>
                                {sec.title}
                            </div>

                            <div className="sectionBody">
                                <p className="desc">{sec.content}</p>

                                <pre>
                                    <code>{sec.example}</code>
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default WorkingWithJsonApis;
