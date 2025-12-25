import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    plugins: [daisyui],
    daisyui: {
        themes: [
            "light",
            {
                cleanDark: {
                    "primary": "#6366f1",
                    "secondary": "#818cf8",
                    "accent": "#22d3ee",
                    "neutral": "#0f172a",
                    "base-100": "#020617", // main bg
                    "base-200": "#020617",
                    "base-300": "#020617",
                    "base-content": "#e5e7eb",
                },
            },
        ],
    },
};
