import * as React from 'react';

const defaultFont = {
    text: 'Segoe Ui, Helvetica, Roboto, Arial, sans-serif',
    element: 'Arial, sans-serif'
};

export const ulightThemes: UlightTheme[] = [
    {
        // foreground: '#ffffff',
        // secondary: '#222222',
        value: 'dark',
        font: defaultFont,
        foreground: '220, 220, 220',
        secondary: '210, 210, 210',
        foregroundLight: '74, 74, 74',
        background: '35, 35, 35',
        backgroundAccent: '41, 41, 41',
        accent: '203, 66, 56'
    },
    {
        value: 'light',
        font: defaultFont,
        foreground: '60, 60, 60',
        secondary: '100, 100, 100',
        foregroundLight: '222, 220, 220',
        background: '242, 242, 242',
        backgroundAccent: '248, 248, 248',
        accent: '203, 66, 56'
    }
];

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
            return ulightThemes[0];
        case UlightThemeTypes.CUSTOM:
            return customTheme ? customTheme : ulightThemes[1];
        default:
            return ulightThemes[1];
    }
};

export interface UlightTheme {
    foreground: string;
    foregroundLight: string;
    secondary: string;
    background: string;
    backgroundAccent: string;
    accent: string;
    font: {
        text: string;
        element: string;
    };
    value: string;
}

export const ThemeContext = React.createContext(
    ulightThemes[1] as UlightTheme // default value
);
