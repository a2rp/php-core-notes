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
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            flex: 0 0 auto;
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
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .p {
            margin: 0;
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
            background: var(--color-bg);
            overflow: hidden;
        }

        .sectionTitle {
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .sectionIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        pre {
            margin-top: 10px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }
    `,
};
