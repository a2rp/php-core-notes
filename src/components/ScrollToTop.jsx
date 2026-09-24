import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollArea = document.getElementById("notes-scroll");
        if (!scrollArea) return undefined;
        const handleScroll = () => setVisible(scrollArea.scrollTop > 320);
        scrollArea.addEventListener("scroll", handleScroll, { passive: true });
        return () => scrollArea.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            title="Scroll to top"
            onClick={() => document.getElementById("notes-scroll")?.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
                position: "fixed",
                right: "24px",
                bottom: "24px",
                zIndex: 60,
                width: "42px",
                height: "42px",
                display: "grid",
                placeItems: "center",
                border: "1px solid var(--color-border-light)",
                borderRadius: "50%",
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                cursor: "pointer",
                boxShadow: "0 8px 22px rgba(0, 0, 0, 0.25)",
            }}
        >
            <FiArrowUp aria-hidden="true" />
        </button>
    );
}
