function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          accent: withOpacity("--color-accent"),
          muted: withOpacity("--color-muted"),
        },
      },
      backgroundColor: {
        custom: {
          accent: withOpacity("--bg-accent"),
          primary: withOpacity("--bg-primary"),
          secondary: withOpacity("--bg-secondary"),
          muted: withOpacity("--bg-muted"),
        },
      }, //usage: bg-custom-accent
      borderColor: {
        custom: {
          accent: withOpacity("--border-accent"),
          primary: withOpacity("--border-primary"),
          secondary: withOpacity("--border-secondary"),
        },
      }, //usage: border-custom-primary
    },
  },
  plugins: [],
}
