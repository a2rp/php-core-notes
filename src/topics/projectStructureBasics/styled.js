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
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
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
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 250ms ease;
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            border-top: 1px solid var(--color-border);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin: 0;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
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
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .sectionBodyInner {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .bullets {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        .bullets li {
            margin-bottom: 6px;
        }

        .codeBlock {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
            overflow: hidden;
        }

        .codeTitle {
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        pre {
            margin: 0;
            padding: 14px;
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            font-size: 13px;
            overflow-x: auto;
        }
    `,
};
