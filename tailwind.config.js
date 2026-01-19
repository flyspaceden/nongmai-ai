export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        "bg-0": "#f8fafc",
        "bg-1": "#f1f5f9",
        "bg-2": "#e2e8f0",
        surface: "#ffffff",
        "surface-muted": "#f8fafc",
        "surface-soft": "#f1f5f9",
        line: "#e2e8f0",
        "on-surface": "#0b1220",
        "on-muted": "#1f2937",
        "on-soft": "#334155",
        primary: "#0ea5a5",
        "on-primary": "#ffffff",
        dark: "#0b1220",
        "on-dark": "#f8fafc",
        accent: "#16a34a",
        highlight: "#f59e0b",
        "text-0": "#0b1220",
        "text-1": "#1f2937",
        "text-2": "#334155"
      },
      fontFamily: {
        sans: ["Sora", "Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "deep": "0 25px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
