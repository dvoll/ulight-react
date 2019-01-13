import * as React from 'react';

import './BaseInput.css';

// export interface BaseInputProps {
//     // time: Date;
// }

const BaseInput: React.SFC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
> = props => {
    const { className, ...restProps } = props;
    return (
        <input
            className={'Ulight-container Ulight-BaseInput ' + className}
            key={'baseinput' + props.id}
            {...restProps}
        />
    );
};

export default React.memo(BaseInput);
