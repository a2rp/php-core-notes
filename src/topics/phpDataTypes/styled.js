// dataTypes/styled.js
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
            border: 1px solid var(--color-border);
            border-radius: 10px;
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
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .section {
            padding: 14px;
            border-bottom: 1px solid var(--color-border-light);
        }

        .sectionTitle {
            font-weight: 900;
            margin-bottom: 12px;
            color: var(--color-text-primary);
        }

        .row {
            margin-bottom: 12px;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }

        .typeName {
            font-weight: 800;
        }

        .right {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .example {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }
    `,
};
