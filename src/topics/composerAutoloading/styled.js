// composerAutoloading/styled.js
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
            max-height: 14000px;
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

        .sections {
            padding: 14px 14px;
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
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 12px;
            padding: 12px;
        }

        .row + .row {
            border-top: 1px dashed var(--color-border-light);
        }

        .op {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 14px;
        }

        .ex {
            margin-top: 8px;
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

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }

            .op {
                justify-content: flex-start;
            }
        }
    `,
};
