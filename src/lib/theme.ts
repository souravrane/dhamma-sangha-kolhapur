export const theme = {
  colors: {
    hunyadi_yellow: "#f6bd60",
    linen: "#f7ede2",
    tea_rose_red: "#f5cac3",
    cambridge_blue: "#84a59d",
    light_coral: "#f28482",
  },
  lotus: {
    opacity: 0.08,
    blur: "0.2px",
    size: "480px",
  },
  radius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
} as const;

export type Theme = typeof theme;
