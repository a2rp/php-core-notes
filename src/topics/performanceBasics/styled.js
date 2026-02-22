// performanceBasics/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 7000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
        }

        .pillIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .sectionBody p {
            margin: 0;
        }

        .sectionBody ul {
            margin-top: 10px;
            display: grid;
            gap: 8px;
            padding-left: 0;
        }

        .sectionBody li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .sectionBody li::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            margin-top: 7px;
            flex: 0 0 auto;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 10px;
            border-radius: 12px;
            overflow-x: auto;
            margin-top: 10px;
        }
    `,
};
