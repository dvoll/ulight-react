import * as React from "react";

import './ToggleButton.css';

export interface ToggleElementProps {
    index?: number;
    // checked?: boolean;
    // onStateChange: (state: boolean) => any;
    // name: string;
    // labelName: string
    // optionValue: string;
    myRadioStyle?: boolean;
    selected?: boolean;
}

class ToggleElement extends React.Component<React.HTMLProps<HTMLInputElement> & ToggleElementProps> {

    // constructor(props: React.HTMLProps<HTMLInputElement> & ToggleElementProps) {
        // super(props);
        // this.handleChangedCheckState = this.handleChangedCheckState.bind(this);
    // }

    public render() {
        const {index, myRadioStyle, ...restProps} = this.props;
        return <div className="Ulight-ToggleButton">
            <input id={this.props.id} type={myRadioStyle ? "radio" : "checkbox"} {...restProps} />
            <label className="Ulight-ToggleElement Ulight-button has-default" htmlFor={this.props.id}>
                {this.props.value}
            </label>
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

export default ToggleElement;
