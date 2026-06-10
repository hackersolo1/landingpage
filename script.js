// ===================== Stacoviaki — interações =====================
document.addEventListener("DOMContentLoaded", () => {
  /* ---- Ano automático no rodapé ---- */
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- Sombra/realce do header ao rolar ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menu mobile (hambúrguer) ---- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // fecha ao clicar em um link
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );
  }

  /* ---- Pausar / retomar rotação do modelo 3D ---- */
  const stopBtn = document.querySelector(".stop");
  const viewer = document.querySelector("model-viewer");
  const icon = stopBtn ? stopBtn.querySelector("i") : null;
  if (stopBtn && viewer) {
    let girando = true;
    stopBtn.addEventListener("click", () => {
      girando = !girando;
      if (girando) {
        viewer.setAttribute("auto-rotate", "");
        icon && icon.classList.remove("paused-icon");
        stopBtn.classList.remove("paused");
        stopBtn.setAttribute("aria-label", "Pausar rotação automática");
        stopBtn.title = "Pausar a rotação automática";
      } else {
        viewer.removeAttribute("auto-rotate");
        stopBtn.classList.add("paused");
        stopBtn.setAttribute("aria-label", "Retomar rotação automática");
        stopBtn.title = "Retomar a rotação automática";
      }
    });
  }

  /* ---- Scroll reveal com IntersectionObserver ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // pequeno stagger entre elementos visíveis juntos
            entry.target.style.transitionDelay = `${Math.min(i * 80, 240)}ms`;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    // fallback: mostra tudo
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
});
