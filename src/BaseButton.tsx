import * as React from 'react';
import './BaseButton.css';
import BaseIcon from './BaseIcon';


export interface Props {
    name?: string;
    callback?: (ev: any) => void;
    icon?: string,
    children?: React.ReactNode
}

const BaseButton = (props: Props) => {
    const classNames = `${props.name ? "has-default" : ""} ${props.icon ? "has-icon" : ""}`;
    return (
        <button onClick={props.callback} className={classNames}  >
            {props.icon ? <BaseIcon iconName={props.icon} /> : null}
            {props.children ? null : props.name}
            {props.children}
        </button>
    );
}

export default BaseButton;
