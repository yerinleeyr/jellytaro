/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: false,
      screens: {
        sm: "100%",
        md: "960px",
        lg: "1100px",
        xl: "1100px",
        "2xl": "1100px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: ["Playfair Display", "DM Serif Display", "serif"],
      },
      fontSize: {
        "7xl": "var(--text-7xl)",
        "5xl": "var(--text-5xl)", // 48px
        "4xl": "var(--text-4xl)", // 36px
        "3xl": "var(--text-3xl)", // 30px
        "2xl": "var(--text-2xl)", // 24px
        xl: "var(--text-xl)", // 20px
        lg: "var(--text-lg)", // 18px
        base: "var(--text-base)", // 16px
        sm: "var(--text-sm)", // 14px
        xs: "var(--text-xs)", // 12px
      },
      colors: {
        mystic: {
          deep: "var(--mystic-deep)",
          navy: "var(--mystic-navy)",
          azure: "var(--mystic-azure)",
          sky: "var(--mystic-sky)",
          "sky-10": "var(--mystic-sky-10)",
          "sky-20": "var(--mystic-sky-20)",
          "sky-30": "var(--mystic-sky-30)",
          "sky-hover": "var(--mystic-sky-hover)",
          mist: "var(--mystic-mist)",
          frost: "var(--mystic-frost)",
          emerald: "var(--mystic-emerald)",
          amber: "var(--mystic-amber)",
          rose: "var(--mystic-rose)",
          surface: "var(--mystic-surface)",
          "surface-subtle": "var(--mystic-surface-subtle)",
          "surface-elevated": "var(--mystic-surface-elevated)",
          "surface-hover": "var(--mystic-surface-hover)",
          "surface-input": "var(--mystic-surface-input)",
          border: "var(--mystic-border)",
          "border-hover": "var(--mystic-border-hover)",
        },
        /* shadcn 호환 */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        sm: "var(--radius-sm)", // 4px
        md: "var(--radius-md)", // 6px
        lg: "var(--radius-lg)", // 8px
        xl: "var(--radius-xl)", // 12px
        "2xl": "var(--radius-2xl)", // 16px
        full: "var(--radius-full)", // 9999px
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        float: "var(--shadow-float)",
        "glow-sky": "var(--shadow-glow-sky)",
        "glow-sky-lg": "var(--shadow-glow-sky-lg)",
        "glow-sky-sm": "var(--shadow-glow-sky-sm)",
        "glow-emerald": "var(--shadow-glow-emerald)",
        "glow-amber": "var(--shadow-glow-amber)",
      },
      backdropBlur: {
        sm: "var(--blur-sm)",
        lg: "var(--blur-lg)",
        xl: "var(--blur-xl)",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
