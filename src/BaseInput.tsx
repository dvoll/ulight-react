import * as React from "react";

export interface InputProps {
    name: string;
}

const BaseInput = (props: InputProps) => {
    return <input defaultValue={props.name} />;
};

export default BaseInput;
