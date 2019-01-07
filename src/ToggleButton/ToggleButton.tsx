import * as React from "react";

import './ToggleButton.css';
import ToggleElement from "./ToggleElement";

// interface ToggleButtonState {
//     checked: boolean;
// }
export interface ToggleButtonProps extends React.HTMLAttributes<HTMLInputElement> {

}

class ToggleButton extends React.Component<ToggleButtonProps> {

    constructor(props: ToggleButtonProps) {
        super(props);
        // this.state = { checked: this.props.checked || false };
        // this.handleChangedCheckState = this.handleChangedCheckState.bind(this);
    }

    public render() {
        const {children, ...restProps} = this.props;
        return <div > {/* Ulight-ToggleButton */}
            <ToggleElement {...restProps} >{children}</ToggleElement>
                {/* <input id={this.props.name} type="checkbox" checked={this.state.checked} onChange={this.props.onChange || this.handleChangedCheckState} style={{ display: "hidden" }} />
            <label className='Ulight-ToggleElement Ulight-button has-default' htmlFor={this.props.name} >{this.props.value}</label> */}
                {/* <BaseButton className=".Ulight-Toggle-Element">
                Toggle Button
            </BaseButton> */}
            </div>;
    }

    // private handleChangedCheckState(event: React.ChangeEvent<HTMLInputElement>) {
    //     const checked = event.target ? event.target.checked : false;
    //     this.setState({ checked });
    // }
}

export default ToggleButton;
