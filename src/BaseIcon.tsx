import * as React from "react";
import './default-style.css';
import { ThemeContext } from "./theme-context";

interface IconProps {
    iconName: string;
    style?: React.CSSProperties;
    className?: string;
}

const BaseIcon = (props: IconProps) => {
    const {iconName, className, style, ...restProps} = props;
    const viewBox =  `0 0 50 50`;

    const classNames =
        "Ulight-container Ulight-icon " +
        className || "";

    return(
        <ThemeContext.Consumer>
            {theme => {
                const styles = {
                    ["--foreground-rgb" as any]: theme.foreground,
                    ...style
                };
                return <svg style={styles} className={classNames} viewBox={viewBox} {...restProps} >
                    <use xlinkHref={`#${iconName}`} />
                </svg>
            }}
        </ThemeContext.Consumer>        
    );
}

export default BaseIcon;