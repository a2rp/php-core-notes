import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-bg);
        }

        .sectionTitle {
            padding: 10px 12px;
            font-weight: 900;
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--color-surface);
            border-bottom: 1px solid var(--color-border);
        }

        .sectionIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .content {
            padding: 12px;
        }

        .desc {
            margin-bottom: 10px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        code {
            font-family: ui-monospace, monospace;
        }
    `,
};
