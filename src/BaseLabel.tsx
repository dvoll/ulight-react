import * as React from "react";
import { ThemeContext } from "./theme-context";
import './default-style.css'
import './BaseLabel.css';

export interface LabelProps {
    name: string;
}

interface LayoutProps {
    style?: React.CSSProperties;
    className?: string;
}

const BaseLabel = (props: LabelProps & LayoutProps) => {
    return (
        <ThemeContext.Consumer>
            {theme => {
                const style = {
                    ['--foreground-rgb' as any]: theme.foreground,
                    ...props.style
                };
                const className = "Ulight-container Ulight-label " + props.className || '';
                return <span className={className} style={style}>{props.name}</span>;
            }}
        </ThemeContext.Consumer>
    );
};

export default BaseLabel;