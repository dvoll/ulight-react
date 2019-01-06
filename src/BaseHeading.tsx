import * as React from "react";
import { ThemeContext } from "./theme-context";
import "./default-style.css";
import "./BaseHeading.css";

export interface HeadingProps {
    title?: string;
    level: number;
    // children?: any;
    // className?: string,
    // style?: React.CSSProperties
}

const BaseHeading = (props: HeadingProps & React.HTMLProps<HTMLHeadingElement>) => {
    const {title, level, style, className, children, ...restProps} = props;
    const Heading = (props: React.HTMLProps<HTMLHeadingElement>) => React.createElement("h1", props, children);
    // const Heading = React.createElement('h1', props, children);
    // const Heading = React.Component<any> = 'h1';

    // const Heading: HTMLHeadingElement = `h${level}`;
    // const Heading = Heading();
    // const MyHeading = Heading(children, props);
    return (
        <ThemeContext.Consumer>
            {theme => {
                const styles = {
                    ["--foreground-rgb" as any]: theme.foreground,
                    // ["--secondary-rgb" as any]: theme.secondary,
                    ...style
                };

                const classNames =
                    "Ulight-container Ulight-heading " +
                    className || "";

                const headingProps = {...restProps, style: styles, className: classNames};
 
                return Heading(headingProps);
            }
            }
        </ThemeContext.Consumer>
    );
};

export default BaseHeading;