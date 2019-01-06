import * as React from "react";

import './ToggleButton.css';

interface ToggleButtonState {
    checked: boolean;
}
export interface  ToggleButtonProps {
    index?: number;
    checked?: boolean;
    onStateChange: (state: boolean) => any;
    name: string;
    // optionValue: string;
    myRadioStyle?: boolean;
}

class ToggleButton extends React.Component<React.HTMLProps<HTMLInputElement> & ToggleButtonProps, ToggleButtonState> {

    constructor(props: React.HTMLProps<HTMLInputElement> & ToggleButtonProps) {
        super(props);
        this.state = { checked: this.props.checked || false };
        this.handleChangedCheckState = this.handleChangedCheckState.bind(this);
    }

    public render() {
        return <div className="Ulight-ToggleButton">
            <input id={this.props.name} type="checkbox" checked={this.state.checked} onChange={this.props.onChange || this.handleChangedCheckState} style={{ display: "hidden" }} />
            <label className='Ulight-ToggleElement Ulight-button has-default' htmlFor={this.props.name} >{this.props.value}</label>
            {/* <BaseButton className=".Ulight-Toggle-Element">
                Toggle Button
            </BaseButton> */}
        </div>;
    }

    private handleChangedCheckState(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target ? event.target.checked : false;
        this.setState({ checked });
    }
}

export default ToggleButton;
