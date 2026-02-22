import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
            color: var(--color-text-primary);
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

        .titleIcon {
            width: 34px;
            height: 34px;
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
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-text-muted);
        }

        .body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .body.open {
            max-height: 5000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: var(--color-surface-2);
        }

        .intro p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            padding: 10px;
            border-radius: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            gap: 14px;
            padding: 16px;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .cardHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-weight: 900;
        }

        .cardIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .desc {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .example {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            padding: 10px;
            border-radius: 10px;
            font-size: 13px;
            overflow-x: auto;
            white-space: pre-wrap;
        }
    `,
};
