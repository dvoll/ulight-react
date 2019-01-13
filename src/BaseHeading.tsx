import * as React from 'react';
import { ThemeContext } from './theme-context';

import './BaseHeading.css';
import './default-style.css';

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
    title?: string;
    level: number;
    // children?: any;
    // className?: string,
    // style?: React.CSSProperties
}

const BaseHeading = (props: HeadingProps) => {
    const { title, level, style, className, children, ...restProps } = props;
    const myChildren = title !== undefined ? title : children;
    const Heading = (headingProps: React.HTMLProps<HTMLHeadingElement>) =>
        React.createElement('h' + props.level, headingProps, myChildren);
    // const Heading = React.createElement('h1', props, children);
    // const Heading = React.Component<any> = 'h1';

    // const Heading: HTMLHeadingElement = `h${level}`;
    // const Heading = Heading();
    // const MyHeading = Heading(children, props);
    return (
        <ThemeContext.Consumer>
            {theme => {
                const styles = {
                    ['--foreground-rgb' as any]: theme.foreground,
                    // ["--secondary-rgb" as any]: theme.secondary,
                    ...style
                };

                const classNames =
                    'Ulight-container Ulight-heading ' + className || '';

                const headingProps = {
                    ...restProps,
                    style: styles,
                    className: classNames
                };

                return Heading(headingProps);
            }}
        </ThemeContext.Consumer>
    );
};

export default React.memo(
    BaseHeading,
    (prev, next) => prev.title === next.title && prev.children === next.children
);
