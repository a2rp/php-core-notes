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

        .header {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
        }

        .header:hover {
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
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            flex: 1;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .body.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            color: var(--color-text-secondary);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .sectionTitle {
            font-weight: 900;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
        }

        .sectionIcon {
            color: var(--color-primary);
        }

        .row {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 12px;
            padding: 10px 0;
        }

        .keyword {
            font-family: ui-monospace, monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 8px;
            text-align: center;
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 6px;
        }

        .example {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .label {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family: ui-monospace, monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        @media (max-width: 700px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `,
};
