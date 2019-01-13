import * as React from 'react';

export const themes = {
    dark: {
        // foreground: '#ffffff',
        // secondary: '#222222',
        foreground: '220, 220, 220',
        secondary: '210, 210, 210',
        foregroundLight: '74, 74, 74',
        background: '35, 35, 35',
        backgroundAccent: '41, 41, 41',
        accent: '203, 66, 56',
        value: 'dark'
    },
    light: {
        foreground: '60, 60, 60',
        secondary: '100, 100, 100',
        foregroundLight: '222, 220, 220',
        background: '242, 242, 242',
        backgroundAccent: '248, 248, 248',
        accent: '203, 66, 56',
        value: 'light'
    }
};

export enum ThemeType {
    LIGHT,
    DARK,
    CUSTOM
}

export const getTheme = (theme: ThemeType, customTheme?: Theme) => {
    switch (theme) {
        case ThemeType.DARK:
            return themes.dark;
        case ThemeType.CUSTOM:
            return customTheme ? customTheme : themes.light;
        default:
            return themes.light;
    }
};

export interface Theme {
    foreground: string;
    foregroundLight: string;
    secondary: string;
    background: string;
    backgroundAccent: string;
    accent: string;
    value: string;
}

export const ThemeContext = React.createContext(
    themes.light as Theme // default value
);
