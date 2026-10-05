// Remplace cette valeur par ton lien Setmore dès que ton compte est prêt.
const SETMORE_URL = "";

document.querySelectorAll(".booking").forEach(a => {
  a.addEventListener("click", (e) => {
    if (SETMORE_URL) return;
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
  });
});

["bookingTop","bookingHero","bookingBottom"].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", (e) => {
    if (SETMORE_URL) {
      e.preventDefault();
      window.open(SETMORE_URL, "_blank");
    }
  });
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
