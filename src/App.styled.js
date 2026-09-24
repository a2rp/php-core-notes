import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        overflow: hidden;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 50;
        height: 68px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-bg) 90%, transparent);
        backdrop-filter: blur(14px);
    `,
    Main: styled.main`
        height: 100vh;
        padding-top: 68px;
        overflow-y: auto;
        position: relative;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--color-border-light) transparent;
        &::-webkit-scrollbar { width: 10px; }
        &::-webkit-scrollbar-track { background: transparent; }
        &::-webkit-scrollbar-thumb { background: var(--color-border-light); border: 3px solid transparent; border-radius: 999px; background-clip: content-box; }
        .contentWrapper {
            min-height: 100%;
            width: min(1440px, calc(100% - 32px));
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            padding: 24px 0 10px;
            .category { margin: 28px 0 15px; }
        }
        .footerWrapper { flex-shrink: 0; padding: 14px 0 24px; }
        @media (max-width: 640px) {
            .contentWrapper { width: min(100% - 20px, 1440px); padding-top: 16px; }
        }
    `,
    Loading: styled.div` min-height: 50vh; display: grid; place-content: center; color: var(--color-text-muted); `,
};
