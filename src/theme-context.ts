import * as React from 'react';

export const ulightThemes = {
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

export enum UlightThemeTypes {
    LIGHT = 0,
    DARK = 1,
    CUSTOM = 2
}

export const getTheme = (
    theme: UlightThemeTypes,
    customTheme?: UlightTheme
) => {
    switch (theme) {
        case UlightThemeTypes.DARK:
            return ulightThemes.dark;
        case UlightThemeTypes.CUSTOM:
            return customTheme ? customTheme : ulightThemes.light;
        default:
            return ulightThemes.light;
    }
};

export interface UlightTheme {
    foreground: string;
    foregroundLight: string;
    secondary: string;
    background: string;
    backgroundAccent: string;
    accent: string;
    value: string;
}

export const ThemeContext = React.createContext(
    ulightThemes.light as UlightTheme // default value
);
