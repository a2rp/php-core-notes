import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        display: flex;
        align-items: center;
        padding: 0 18px;
        height: 68px;
        background: transparent;
    `,
    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            width: 100%;
        }
        .logoNameWrapper { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .logoWrapper {
            position: relative;
            width: 44px;
            height: 44px;
            padding: 5px;
            flex: 0 0 auto;
            overflow: hidden;
            border: 1px solid var(--color-border-light);
            border-radius: 12px;
            background: #05070c;
            img { width: 100%; height: 100%; object-fit: contain; transition: opacity 180ms ease; }
            .logoSkeleton { position: absolute; inset: 0; background: var(--color-surface-2); }
        }
        .nameWrapper { display: grid; gap: 1px; min-width: 0; }
        .title { overflow: hidden; color: var(--color-text-primary); font-weight: 800; letter-spacing: 0.02em; text-overflow: ellipsis; white-space: nowrap; }
        .subTitle { color: var(--color-text-muted); font-size: 11px; white-space: nowrap; }
        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 11px;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            cursor: pointer;
            transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
            .icon { display: inline-flex; font-size: 17px; }
            .label { color: var(--color-text-secondary); font-size: 12px; font-weight: 700; }
            &:hover, &:focus-visible { border-color: var(--color-border-light); box-shadow: 0 0 18px var(--color-shadow); text-shadow: 0 0 10px var(--color-primary); outline: none; }
        }
        @media (max-width: 520px) {
            .subTitle, .themeToggleBtn .label { display: none; }
        }
    `,
};
