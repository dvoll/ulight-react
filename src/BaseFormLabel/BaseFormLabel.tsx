import * as React from "react";

import './BaseFormLabel.css';

export interface BaseFormLabelProps {
    // time: Date;
}

const BaseFormLabel: React.SFC<BaseFormLabelProps & React.LabelHTMLAttributes<HTMLLabelElement> > = (props) => {

    return (
        <label >{props.children}</label>
    );
}

export default BaseFormLabel;
