import * as React from 'react';
import { ThemeContext } from './theme-context';

import './BaseLabel.css';
import './default-style.css';

export interface LabelProps extends React.HTMLProps<HTMLSelectElement> {
    name?: string;
    textSize?: 'small' | 'normal';
    noTransform?: boolean;
}

const BaseLabel = (props: LabelProps) => {
    const {
        style,
        className,
        name,
        textSize = 'normal',
        noTransform = false,
        children
    } = props;
    return (
        <ThemeContext.Consumer>
            {theme => {
                const styles: React.CSSProperties = {
                    ['--foreground-rgb' as any]: theme.foreground
                };
                let classNames = 'Ulight-container Ulight-label ';
                if (textSize === 'small') {
                    classNames += 'small-text ';
                }
                if (!noTransform) {
                    classNames += 'text-transform ';
                }
                return (
                    <span
                        className={classNames + className}
                        style={{ ...styles, ...style }}
                    >
                        {name || children}
                    </span>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default BaseLabel;
