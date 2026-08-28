// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        blinkColor: {
          "0%, 100%": { opacity: "1", backgroundColor: "#991b1b" }, // red-900
          "25%": { opacity: "0", backgroundColor: "#dc2626" }, // red-600
          "50%": { opacity: "1", backgroundColor: "#f87171" }, // red-400
          "75%": { opacity: "0", backgroundColor: "#991b1b" }, // back to red-900
        },
      },
      animation: {
        blinkColor: "blinkColor 1.5s infinite",
      },
    },
  },
};
