export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        "bg-0": "#070b12",
        "bg-1": "#0b1220",
        "bg-2": "#0f172a",
        "text-0": "#e6eef9",
        "text-1": "#b8c7e0",
        "text-2": "#89a3c7",
        primary: "#14b8a6",
        accent: "#22c55e",
        highlight: "#f59e0b"
      },
      fontFamily: {
        sans: ["Sora", "Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "deep": "0 30px 80px rgba(3, 7, 18, 0.55)"
      }
    }
  },
  plugins: []
};
