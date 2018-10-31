import * as React from "react";
import { ThemeContext } from "./theme-context";

export interface HeadingProps {
    name?: string;
    level: number;
    children?: any;
}

const BaseHeading = (props: HeadingProps) => {
    const style = {
        color: "var(--grey-500)",
        fontSize: "1.2rem",
        fontStyle: "italic",
        // textTransform: 'uppercase',
    };
    const Heading = `h${props.level}`;
    return (
        <ThemeContext.Consumer>
            {theme => {
                style.color = `rgb(${theme.foreground})`;
                return <Heading style={style}>{props.name}{props.children}</Heading>;
            }
            }
        </ThemeContext.Consumer>
    );
};

export default BaseHeading;