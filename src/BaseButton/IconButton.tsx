import * as React from 'react';
import { BaseIconProps } from 'src/BaseIcon';
import { UlightTheme } from 'src/theme-context';
import { withUlightTheme } from '../withUlightTheme-new';
import { BaseButtonProps, BaseButtonThemeProps } from './BaseButton';
import BaseButton from './BaseButton';

import './BaseButton.css';

interface IconButtonProps extends BaseButtonProps {
    // foregroundRgb: string; // [number, number, number];
    // borderRgb: string;
    // backgroundRgb: string;
    // icon: React.ReactElement<BaseIconProps>;
}

const DefaultIconButton: React.SFC<
    IconButtonProps & BaseButtonThemeProps
> = props => {
    const { className, style, children, ...restProps } = props;

    const iconSize = 15;
    const styles: React.CSSProperties = {
        ['--icon-size' as any]: iconSize,
        ...style
    };

    // const
    const classNames = `
    `;

    const child = children as React.ReactElement<BaseIconProps>;
    const iconChild = React.cloneElement(child, {
        height: 20,
        fillRgb: props.foregroundRgb
    });
    return (
        <BaseButton
            className={classNames + className}
            style={styles}
            {...restProps}
        >
            {iconChild}
        </BaseButton>
    );
};

const IconButton = withUlightTheme<IconButtonProps & UlightTheme>(
    (props: IconButtonProps & UlightTheme) => {
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
            <DefaultIconButton
                foregroundRgb={foreground}
                backgroundRgb={background}
                borderRgb={foregroundLight}
                {...restProps}
            />
        );
    }
);

export default IconButton;
