import * as React from 'react';
import { BaseIconProps } from 'src/BaseIcon';
import { UlightTheme } from 'src/theme-context';
import BaseLabel from '../BaseLabel';
import { withUlightTheme } from '../withUlightTheme-new';
import { BaseButtonProps, BaseButtonThemeProps } from './BaseButton';
import BaseButton from './BaseButton';

import './ActionIconButton.css';

// interface DefaultActionIconButtonThemeProps extends BaseButtonProps {
//     // foregroundRgb: string; // [number, number, number];
//     // borderRgb: string;
//     // backgroundRgb: string;
// }

interface DefaultActionIconButtonProps extends BaseButtonProps {
    children: React.ReactElement<BaseIconProps>;
    actionLabel?: React.ReactNode;
}

const DefaultActionIconButton: React.SFC<
    DefaultActionIconButtonProps & BaseButtonThemeProps
> = props => {
    const { className, style, children, actionLabel, ...restProps } = props;

    // const iconSize = 15;
    // const styles: React.CSSProperties = {
    //     ['--icon-size' as any]: iconSize,
    //     ...style
    // };

    const iconChild = React.cloneElement(children, {
        height: 40,
        fillRgb: props.foregroundRgb
    });

    const classNames = 'Ulight-ActionIconButton ';
    return (
        <BaseButton
            className={classNames + className}
            style={style}
            {...restProps}
        >
            {iconChild}
            <BaseLabel textSize={'small'}>{actionLabel}</BaseLabel>
        </BaseButton>
    );
};

const ActionIconButton = withUlightTheme<DefaultActionIconButtonProps>(
    (props: DefaultActionIconButtonProps & UlightTheme) => {
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
            <DefaultActionIconButton
                foregroundRgb={foreground}
                backgroundRgb={background}
                borderRgb={foregroundLight}
                {...restProps}
            />
        );
    }
);

export default ActionIconButton;
