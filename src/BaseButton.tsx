import * as React from "react";
import BaseIcon from "./BaseIcon";
import { ThemeContext, themes } from "./theme-context";
import "./default-style.css";
import "./BaseButton.css";


export interface ButtonProps {
    name?: string;
    callback?: (ev: any) => void;
    icon?: string;
    children?: React.ReactNode;
    componentRef?: React.RefObject<HTMLButtonElement>;
    disabled?: boolean;
}

const BaseButton = (props: ButtonProps) => {
    let classNames = `${props.name || props.children ? "has-default" : ""} ${props.icon ? "has-icon" : ""} ${props.icon ? "has-icon" : ""}`;
    return <ThemeContext.Consumer>
            {theme => {
                console.log(theme);
                if (theme === themes.dark ) {
                    classNames += " dark";
                }
                // const foreground = theme.foreground;

                return (
                    <button
                    disabled={props.disabled || false}
                    ref={props.componentRef}
                    onClick={props.callback}
                    className={classNames + "  Ulight-container Ulight-button"}
                        style={{ ["--foreground-rgb" as any]: theme.foreground, ["--secondary-rgb" as any]: theme.secondary}}
                    >
                        {props.icon ? <BaseIcon iconName={props.icon} /> : null}
                        {props.children ? null : props.name}
                        {props.children}
                    </button>
                    );
                }
            }
        </ThemeContext.Consumer>;
};

export default BaseButton;
