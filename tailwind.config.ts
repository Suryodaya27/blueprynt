import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        "border-bright": "hsl(var(--border-bright))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          glow: "hsl(var(--cyan-glow))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          hover: "hsl(var(--card-hover))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-cyan': 'var(--gradient-cyan)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'blue': 'var(--shadow-blue)',
        'card': 'var(--shadow-card)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "cube-assemble": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(var(--start-x, 0)) translateY(var(--start-y, 0)) scale(0.5) rotate(45deg)" 
          },
          "80%": { 
            opacity: "1", 
            transform: "translateX(0) translateY(0) scale(1.1) rotate(0deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0) translateY(0) scale(1) rotate(0deg)" 
          },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(188 100% 50% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(188 100% 50% / 0.6)" },
        },
        "grid-draw": {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "float": "float 6s ease-in-out infinite",
        "cube-assemble": "cube-assemble 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "grid-draw": "grid-draw 2s ease-in-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
