import * as React from "react";
import { ThemeContext } from "./theme-context";

export interface LabelProps {
    name: string;
}

const BaseLabel = (props: LabelProps) => {
    const label = (colorRgb: string) => {
        return (
            <span
                style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: `rgba(${colorRgb}, 60%)`, // "var(--grey-500, #686464)",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                }}
            >
                {props.name}
            </span>);
    }
    return <ThemeContext.Consumer>
        {theme => {
            return label(theme.foreground)
        }}
        </ThemeContext.Consumer>;
};

export default BaseLabel;