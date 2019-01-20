import * as React from 'react';
import { ThemeContext } from './theme-context';

import './BaseLabel.css';
import './default-style.css';

export interface LabelProps extends React.HTMLProps<any> {
    name?: string;
}

const BaseLabel = (props: LabelProps) => {
    return (
        <ThemeContext.Consumer>
            {theme => {
                const style = {
                    ['--foreground-rgb' as any]: theme.foreground,
                    ...props.style
                };
                const className =
                    'Ulight-container Ulight-label ' + props.className || '';
                return (
                    <span className={className} style={style}>
                        {props.name || props.children}
                    </span>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default BaseLabel;
