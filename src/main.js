// Example: Tracking a WhatsApp icon click
document.querySelector("#whatsapp-btn")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "click", {
      event_category: "Contact",
      event_label: "WhatsApp Button",
    });
  }
});
