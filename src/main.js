// Example: Tracking a WhatsApp icon click
document.querySelector("#whatsapp-btn")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "click", {
      event_category: "Contact",
      event_label: "WhatsApp Button",
    });
  }
});

// HypeLab

placementSlug: import.meta.env.VITE_HYPELAB_PLACEMENT;

// main.js - Vite App Entry Point

document.addEventListener("DOMContentLoaded", () => {
  // Check if HypeLab script has loaded successfully
  if (window.hypelab) {
    window.hypelab.renderAd({
      placementSlug: "YOUR_PLACEMENT_SLUG", // Obtained from HypeLab dashboard
      containerId: "hypelab-banner-ad", // Matches the DOM element ID
    });
  } else {
    console.error("HypeLab SDK failed to load.");
  }
});
