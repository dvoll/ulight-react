import * as React from "react";

import './BaseInput.css';

export interface BaseInputProps {
    // time: Date;
}

const BaseInput: React.SFC<BaseInputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
    return (
        <input className='Ulight-BaseInput' key={'baseinput' + props.id} {...props} />
    );
}

export default React.memo(BaseInput);
