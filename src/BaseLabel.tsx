import * as React from "react";
import { ThemeContext } from "./theme-context";

export interface LabelProps {
    name: string;
    style?: React.CSSProperties;
}

const BaseLabel = (props: LabelProps) => {
    
    return <ThemeContext.Consumer>
        {theme => {
            const style = {
                fontSize: "0.7rem",
                fontWeight: 700,
                color: `rgba(${theme.foreground}, 60%)`, // "var(--grey-500, #686464)",
                letterSpacing: "1px",
                ['textTransform' as any]: "uppercase",
                ...props.style
            }
            return <span
                style={style}
            >
                {props.name}
            </span>
        }}
        </ThemeContext.Consumer>;
};

export default BaseLabel;