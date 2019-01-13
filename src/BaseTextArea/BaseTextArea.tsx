import * as React from 'react';

import '../BaseInput/BaseInput.css';

export interface BaseTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    // time: Date;
}

const BaseTextArea: React.SFC<BaseTextAreaProps> = props => {
    return (
        <textarea
            {...props}
            className={'Ulight-container Ulight-BaseInput ' + props.className}
        />
    );
};

export default BaseTextArea;
