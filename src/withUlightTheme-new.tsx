import * as React from 'react';
import { ThemeContext } from './theme-context';

import './default-style.css';

export const withUlightTheme = <P extends React.HTMLProps<any>>(
    UlightComponent: React.ComponentType<P>
) => {
    return class extends React.PureComponent<P, {}> {
        // constructor(props: P) {
        //     super(props);
        // }

        public render() {
            return (
                <ThemeContext.Consumer>
                    {theme => {
                        return <UlightComponent {...theme} {...this.props} />;
                    }}
                </ThemeContext.Consumer>
            );
        }
    };
};
