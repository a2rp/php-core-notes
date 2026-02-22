// formsHandling/styled.js
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

        .bullets {
            list-style: none;
            padding: 12px 12px 0 12px;
            margin: 0;
            display: grid;
            gap: 10px;
        }

        .bullet {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .bulletText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .codeBlock {
            margin: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
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
    `,
};
