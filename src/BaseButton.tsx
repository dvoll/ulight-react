import * as React from "react";
import BaseIcon from "./BaseIcon";
import { ThemeContext } from "./theme-context";

import "./BaseButton.css";
import "./default-style.css";

export interface ButtonProps {
    title?: string;
    onClick?: (ev: any) => void;
    icon?: string;
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
}

const BaseButton = (props: ButtonProps) => {
    const {className, style, title, icon, iconStyle, children, ...restProps} = props;
    // let classNames = `${name || children ? "has-default" : ""} ${
    //     icon ? "has-icon" : ""
    // } ${icon ? "has-icon" : ""} ${className}`;
    // const
    return (
        <ThemeContext.Consumer>
            {theme => {
                const styles = {
                    ["--foreground-rgb" as any]: theme.foreground,
                    ["--secondary-rgb" as any]: theme.secondary,
                    ["--background-rgb" as any]: theme.background,
                    ...style
                };

                const hasDefault = (children || title) ? true : false;

                const classNames =
                    "Ulight-container Ulight-button " +
                        (icon ? "has-icon " : "") +
                        (hasDefault ? "has-default " : '') +
                        className || "";

                const iconStyles = {
                    padding: hasDefault ? '3px 5px 3px 0' : 2,
                    "--foreground-rgb": styles['--foreground-rgb'],
                    height: 25,
                    ...iconStyle
                }
                
                return (
                    <button
                        className={classNames}
                        style={styles}
                        {...restProps}
                    >
                        {icon ? <BaseIcon iconName={icon} style={iconStyles} /> : null}
                        {children ? children : title}
                    </button>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default BaseButton;
