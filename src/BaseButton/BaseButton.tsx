import * as React from 'react';

import './BaseButton.css';

export interface BaseButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export interface BaseButtonThemeProps {
    foregroundRgb: string; // [number, number, number];
    borderRgb: string;
    backgroundRgb: string;
}

// export type BaseButtonProps = BaseButtonThemeProps & BaseButtonBaseProps;

const BaseButton: React.SFC<BaseButtonProps & BaseButtonThemeProps> = props => {
    const {
        className,
        style,
        children,
        foregroundRgb,
        borderRgb,
        backgroundRgb,
        ...restProps
    } = props;
    const styles = {
        ['--foreground-rgb' as any]: foregroundRgb,
        ['--background-rgb' as any]: backgroundRgb,
        ['--border-rgb' as any]: borderRgb,
        ...style
    };
    // const
    const classNames = 'Ulight-element Ulight-button ' + className;
    return (
        <button className={classNames} style={styles} {...restProps}>
            {children}
        </button>
    );
};

export default BaseButton;

// type UlightButtonProps = BaseButtonProps & UlightTheme;

// const Button = withUlightTheme<BaseButtonProps>((props: UlightButtonProps) => {
//     const {
//         foreground,
//         foregroundLight,
//         background,
//         secondary,
//         backgroundAccent,
//         accent,
//         value,
//         ...restProps
//     } = props;
//     return (
//         <BaseButton
//             foregroundRgb={foreground}
//             backgroundRgb={background}
//             borderRgb={foregroundLight}
//             {...restProps}
//         />
//     );
// });

// export default Button;
