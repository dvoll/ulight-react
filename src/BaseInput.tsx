import * as React from "react";

export interface Props {
    name: string;
}

const BaseInput = (props: Props) => {
    return <input defaultValue={props.name} />;
};

export default BaseInput;
