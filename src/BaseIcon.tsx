import * as React from 'react';

import './BaseIcon.css';
// import './shared-style.css';

export interface BaseIconProps {
    iconName: string;
    style?: React.CSSProperties;
    className?: string;
    fillRgb?: string;
    strokeRgb?: string;
    height?: number | string;
}

const BaseIcon = (props: BaseIconProps) => {
    const {
        iconName,
        className,
        style,
        fillRgb,
        strokeRgb,
        ...restProps
    } = props;
    const viewBox = `0 0 50 50`;

    let classNames = 'Ulight-element Ulight-icon ';

    const styles: React.CSSProperties = {};
    if (props.height !== undefined) {
        styles.height = props.height;
    }
    if (strokeRgb !== undefined) {
        styles['--stroke-rgb' as any] = strokeRgb;
        classNames += 'has-stroke ';
    }
    if (fillRgb !== undefined) {
        styles['--fill-rgb' as any] = fillRgb;
        classNames += 'has-fill ';
    }
    return (
        <svg
            style={{ ...styles, ...style }}
            className={classNames + className}
            viewBox={viewBox}
            {...restProps}
        >
            <use xlinkHref={`#${iconName}`} />
        </svg>
    );
};

// const getCssColorFromRgb = (value: string) => {
//     return `rgb(${value})`;
// };

export default BaseIcon;
