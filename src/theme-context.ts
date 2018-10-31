import * as React from "react";

export const themes = {
    dark: {
        // foreground: '#ffffff',
        // secondary: '#222222',
        foreground: '220, 220, 220',
        secondary: '74, 74, 74',
        background: '35, 35, 35',
        accent: '187, 0, 0',
    },
    light: {
        foreground: '50, 50, 50',
        secondary: '222, 220, 220',
        background: '248, 248, 248',
        accent: '187, 0, 0',
    },
};

export const ThemeContext = React.createContext(
    themes.light // default value
);