import * as React from "react";

export const themes = {
    dark: {
        // foreground: '#ffffff',
        // secondary: '#222222',
        foreground: '220, 220, 220',
        secondary: '74, 74, 74',
    },
    light: {
        foreground: '50, 50, 50',
        secondary: '222, 220, 220',
    },
};

export const ThemeContext = React.createContext(
    themes.light // default value
);