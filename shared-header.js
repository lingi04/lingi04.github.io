document.querySelectorAll("[data-shared-menu]").forEach((hero) => {
  const button = hero.querySelector("[data-shared-menu-button]");
  const panel = hero.querySelector("[data-shared-menu-panel]");

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = panel.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    panel.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
});
