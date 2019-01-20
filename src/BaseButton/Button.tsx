import * as React from 'react';
import { BaseIconProps } from 'src/BaseIcon';
import { UlightTheme } from 'src/theme-context';
import { withUlightTheme } from '../withUlightTheme-new';
import { BaseButtonProps, BaseButtonThemeProps } from './BaseButton';
import BaseButton from './BaseButton';

import './BaseButton.css';

// interface DefaultButtonThemeProps extends BaseButtonProps {
//     // foregroundRgb: string; // [number, number, number];
//     // borderRgb: string;
//     // backgroundRgb: string;
// }

interface DefaultButtonProps extends BaseButtonProps {
    prefixIcon?: React.ReactElement<BaseIconProps>;
    suffixIcon?: React.ReactElement<BaseIconProps>;
}

const DefaultButton: React.SFC<
    DefaultButtonProps & BaseButtonThemeProps
> = props => {
    const {
        className,
        style,
        children,
        prefixIcon,
        suffixIcon,
        ...restProps
    } = props;

    const iconSize = 15;
    const styles: React.CSSProperties = {
        ['--icon-size' as any]: iconSize,
        ...style
    };

    // const
    const classNames = `
        ${prefixIcon !== undefined && 'prefix-icon '}
        ${suffixIcon !== undefined && 'suffix-icon '}
    `;
    return (
        <BaseButton
            className={classNames + className}
            style={styles}
            {...restProps}
        >
            {prefixIcon !== undefined
                ? React.cloneElement(prefixIcon, {
                      height: iconSize,
                      fillRgb: props.foregroundRgb
                  })
                : null}
            {children}
            {suffixIcon !== undefined
                ? React.cloneElement(suffixIcon, {
                      height: iconSize,
                      fillRgb: props.foregroundRgb
                  })
                : null}
        </BaseButton>
    );
};

const Button = withUlightTheme<DefaultButtonProps>(
    (props: DefaultButtonProps & UlightTheme) => {
        const {
            foreground,
            foregroundLight,
            background,
            secondary,
            backgroundAccent,
            accent,
            value,
            ...restProps
        } = props;
        return (
            <DefaultButton
                foregroundRgb={foreground}
                backgroundRgb={background}
                borderRgb={foregroundLight}
                {...restProps}
            />
        );
    }
);

export default Button;
