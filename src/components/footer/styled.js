import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: grid;
        gap: 22px;
        padding: 28px 0 12px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        @media (max-width: 760px) {
            padding-top: 22px;
        }
    `,
    Intro: styled.div`
        display: grid;
        gap: 8px;
        max-width: 360px;
        strong {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
            font-size: 0.92rem;
        }
        strong svg {
            color: var(--color-accent);
        }
        span {
            font-size: 0.78rem;
            line-height: 1.6;
        }
    `,
    Groups: styled.div`
        display: flex;
        gap: 32px;
        align-items: flex-start;
        @media (max-width: 760px) {
            flex-wrap: wrap;
            gap: 22px;
        }
    `,
    Group: styled.div`
        display: grid;
        gap: 10px;
    `,
    GroupTitle: styled.span`
        color: var(--color-text-primary);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,
    Links: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    `,
    IconLink: styled.a`
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--color-border);
        border-radius: 10px;
        color: var(--color-text-muted);
        transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
        &:hover,
        &:focus-visible {
            color: var(--color-accent);
            border-color: var(--color-accent);
            box-shadow: 0 0 16px color-mix(in srgb, var(--color-accent) 22%, transparent);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-accent) 40%, transparent);

        }
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 3px;
        }
        svg {
            width: 16px;
            height: 16px;
        }
    `,
    Bottom: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        padding-top: 14px;
        border-top: 1px solid var(--color-border);
        font-size: 0.76rem;
        @media (max-width: 560px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
        }
        a {
            color: var(--color-text-primary);
            font-weight: 700;
            transition: color 180ms ease, text-shadow 180ms ease;
            &:hover,
            &:focus-visible {
                color: var(--color-accent);
                text-shadow: 0 0 10px color-mix(in srgb, var(--color-accent) 38%, transparent);
            }
        }
    `,
};
