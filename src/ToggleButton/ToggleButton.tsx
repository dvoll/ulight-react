import * as React from 'react';

import './ToggleButton.css';
import ToggleElement from './ToggleElement';

// interface ToggleButtonState {
//     checked: boolean;
// }
export interface ToggleButtonProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    checkedText?: string;
}

class ToggleButton extends React.Component<ToggleButtonProps> {
    constructor(props: ToggleButtonProps) {
        super(props);
        // this.state = { checked: this.props.checked || false };
        // this.handleChangedCheckState = this.handleChangedCheckState.bind(this);
    }

    public render() {
        const { children, ref, ...restProps } = this.props;
        return <ToggleElement {...restProps}>{children}</ToggleElement>;
    }

    // private handleChangedCheckState(event: React.ChangeEvent<HTMLInputElement>) {
    //     const checked = event.target ? event.target.checked : false;
    //     this.setState({ checked });
    // }
}

export default ToggleButton;
