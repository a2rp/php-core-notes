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
            background: transparent;
            color: var(--color-text-primary);
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
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
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

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 12px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 12px;
            overflow-x: auto;
        }

        code {
            font-family: ui-monospace, monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }
    `,
};
