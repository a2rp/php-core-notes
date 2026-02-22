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
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
            text-align: left;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro {
            padding: 14px;
            color: var(--color-text-secondary);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .card {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            line-height: 1.6;
        }

        .list {
            padding-left: 16px;
            margin-bottom: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            margin-bottom: 4px;
        }

        .example code {
            display: block;
            padding: 10px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            font-family: ui-monospace, monospace;
            font-size: 13px;
        }
    `,
};
