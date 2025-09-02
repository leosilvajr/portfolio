import { useEffect } from "react";

/**
 * Aplica animação de fade-in conforme os elementos entram no viewport
 * e dispara animação das skill bars uma única vez após o load.
 */
export function useFadeInOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const visible = 150;
        if (top < window.innerHeight - visible) {
          el.classList.add("visible");
        }
      });
    };

    const onLoad = () => {
      handleScroll();
      // animação das barras de skill (se existirem no DOM)
      setTimeout(() => {
        document.querySelectorAll<HTMLElement>(".skill-bar").forEach((bar) => {
          const width = bar.style.width; // largura final já definida inline
          bar.style.width = "0%";
          setTimeout(() => (bar.style.width = width), 100);
        });
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", onLoad);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", onLoad);
    };
  }, []);
}
