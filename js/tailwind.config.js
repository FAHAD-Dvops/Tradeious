/* ============================================
   Tradeious Global — Tailwind Configuration
   Shared across all pages
   ============================================ */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "error": "#ba1a1a",
        "primary-container": "#004a99",
        "on-background": "#111c2d",
        "tertiary": "#631e00",
        "secondary-fixed-dim": "#b9c7df",
        "surface-dim": "#cfdaf2",
        "inverse-primary": "#abc7ff",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#d8e3fb",
        "surface-container-low": "#f0f3ff",
        "on-primary-container": "#9bbdff",
        "surface-container": "#e7eeff",
        "surface-container-highest": "#d8e3fb",
        "on-secondary-container": "#57657a",
        "tertiary-fixed": "#ffdbcf",
        "primary": "#00346f",
        "primary-fixed-dim": "#abc7ff",
        "inverse-surface": "#263143",
        "on-secondary-fixed": "#0d1c2e",
        "on-surface-variant": "#424751",
        "on-error": "#ffffff",
        "on-tertiary-fixed": "#380d00",
        "on-surface": "#111c2d",
        "on-secondary-fixed-variant": "#3a485b",
        "on-primary-fixed-variant": "#00458f",
        "secondary-container": "#d5e3fc",
        "on-secondary": "#ffffff",
        "surface-container-high": "#dee8ff",
        "outline": "#737783",
        "on-tertiary-container": "#ffa786",
        "on-tertiary-fixed-variant": "#802a00",
        "surface": "#f9f9ff",
        "on-error-container": "#93000a",
        "outline-variant": "#c2c6d3",
        "on-primary-fixed": "#001b3f",
        "background": "#f9f9ff",
        "tertiary-container": "#892d00",
        "secondary-fixed": "#d5e3fc",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#ecf1ff",
        "surface-tint": "#255dad",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "tertiary-fixed-dim": "#ffb59a",
        "secondary": "#515f74",
        "primary-fixed": "#d7e2ff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Newsreader", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  }
};
