document.addEventListener("DOMContentLoaded", () => {
  // Ano no footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // AOS
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // Header sombra ao rolar
  const siteHeader = document.getElementById("siteHeader");
  const onScroll = () => {
    const y = window.scrollY || 0;
    if (!siteHeader) return;
    siteHeader.style.boxShadow =
      y > 4 ? "0 6px 30px -12px rgba(0,0,0,.25)" : "none";
    siteHeader.classList.toggle("border-b", y > 4);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Drawer mobile
  const drawer = document.getElementById("mobileDrawer");
  const panel = document.getElementById("drawerPanel");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const overlayBtn = document.getElementById("drawerOverlay");

  let drawerOpen = false;

  function lockScroll(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
  }

  function openDrawer() {
    if (!drawer || !panel) return;
    drawer.classList.remove("hidden"); // mostra backdrop
    panel.setAttribute("data-open", "true");
    lockScroll(true);
    openBtn?.setAttribute("aria-expanded", "true");
    drawerOpen = true;
  }

  function closeDrawer() {
    if (!drawer || !panel) return;
    panel.setAttribute("data-open", "false");
    openBtn?.setAttribute("aria-expanded", "false");
    drawerOpen = false;
    lockScroll(false);
    setTimeout(() => drawer.classList.add("hidden"), 300); // espera animação
  }

  openBtn?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  overlayBtn?.addEventListener("click", closeDrawer);
  drawer
    ?.querySelectorAll("a[href]")
    .forEach((a) => a.addEventListener("click", closeDrawer));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerOpen) closeDrawer();
  });

  // Realce de link ativo por seção
  const navLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const ids = navLinks
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && h.length > 1);
  const sections = ids.map((id) => document.querySelector(id)).filter(Boolean);
  if (sections.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = "#" + e.target.id;
          navLinks
            .filter((a) => a.getAttribute("href") === id)
            .forEach((a) =>
              a.classList.toggle("text-primary", e.isIntersecting)
            );
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
  }

  // (Opcional) Form legado
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        nome: form.nome?.value,
        email: form.email?.value,
        telefone: form.telefone?.value,
        mensagem: form.mensagem?.value,
      };
      alert("Mensagem enviada! Entraremos em contato em breve.");
      console.log("Contato:", data);
      form.reset();
    });
  }
});
