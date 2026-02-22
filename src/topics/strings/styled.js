// strings/styled.js
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
            padding: 14px 14px;
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
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
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
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .list {
            padding: 14px 14px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
            flex: 0 0 auto;
            font-size: 16px;
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .example {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .noteRow {
            margin-top: 10px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding-top: 10px;
            border-top: 1px dashed var(--color-border-light);
        }

        .notePill {
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            padding: 5px 8px;
            border-radius: 999px;
            flex: 0 0 auto;
            white-space: nowrap;
        }

        .noteRow .noteText {
            margin: 0;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        @media (max-width: 900px) {
            .card {
                grid-column: span 12;
            }
        }
    `,
};
