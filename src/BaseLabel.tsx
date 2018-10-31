import * as React from "react";

export interface LabelProps {
    name: string;
}

const BaseLabel = (props: LabelProps) => {
    return <span
            style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--grey-500, #686464)", letterSpacing: "1px", textTransform: "uppercase" }}
        >
        {props.name}
        </span>;
};

export default BaseLabel;