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
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
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
            transition: max-height 300ms ease;
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

        .pillIcon {
            color: var(--color-primary);
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
            border-radius: 14px;
            background: var(--color-bg);
        }

        .sectionTitle {
            padding: 10px 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
        }

        .sectionIcon {
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        .note {
            margin-top: 10px;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `,
};
