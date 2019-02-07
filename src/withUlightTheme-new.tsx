import * as React from 'react';
import { ThemeContext } from './theme-context';

import './shared-style.css';

export const withUlightTheme = <P extends React.HTMLProps<any>>(
    UlightComponent: React.ComponentType<P>
) => {
    return class extends React.PureComponent<P, {}> {
        // constructor(props: P) {
        //     super(props);
        // }

        public render() {
            const { style } = this.props;
            return (
                <ThemeContext.Consumer>
                    {theme => {
                        const {
                            foreground,
                            foregroundLight,
                            background,
                            backgroundAccent,
                            secondary,
                            accent
                        } = theme;
                        const themeProps = {
                            foreground,
                            foregroundLight,
                            background,
                            backgroundAccent,
                            accent,
                            secondary
                        };
                        const styles: React.CSSProperties = {
                            fontFamily: theme.font.text,
                            ['--style-font' as any]: theme.font.element,
                            ...style
                        };
                        return (
                            <UlightComponent
                                sytle={styles}
                                {...themeProps}
                                {...this.props}
                            />
                        );
                    }}
                </ThemeContext.Consumer>
            );
        }
    };
};
