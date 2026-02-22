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
            max-height: 5000px;
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
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 10px;
            border-radius: 12px;
            overflow-x: auto;
            margin-top: 8px;
        }

        .note {
            margin-top: 8px;
            font-size: 13px;
            color: var(--color-warning);
        }
    `,
};
