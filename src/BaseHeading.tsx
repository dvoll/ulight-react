import * as React from "react";
import { ThemeContext } from "./theme-context";
import "./default-style.css";

export interface HeadingProps {
    name?: string;
    level: number;
    children?: any;
}

const BaseHeading = (props: HeadingProps) => {
    const style = { 
        // "--foreground-rgb": "220, 220, 220", 
        color: "var(--foreground-color)", 
        fontSize: "1.2rem", 
        fontStyle: "italic" 
    };
        // textTransform: 'uppercase',
    const Heading = `h${props.level}`;
    return (
        <ThemeContext.Consumer>
            {theme => {
                style["--foreground-rgb"] = `${theme.foreground}`;
                return <Heading style={style} className="Ulight-container">{props.name}{props.children}</Heading>;
            }
            }
        </ThemeContext.Consumer>
    );
};

export default BaseHeading;