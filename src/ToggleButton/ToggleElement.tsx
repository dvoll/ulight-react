import * as React from 'react';
import Button from '../BaseButton/Button';

import '../BaseButton.css';
import './ToggleButton.css';

export interface ToggleElementProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    index?: number;
    // checked?: boolean;
    // onStateChange: (state: boolean) => any;
    // name: string;
    // labelName: string
    // optionValue: string;
    myRadioStyle?: boolean;
    checkedText?: string;
    // selected?: boolean;
}

class ToggleElement extends React.PureComponent<ToggleElementProps> {
    constructor(props: ToggleElementProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        const {
            index,
            myRadioStyle,
            onChange,
            style,
            className,
            children,
            checkedText,
            ...restProps
        } = this.props;
        return (
            <div className="Ulight-ToggleButton ">
                <input
                    id={this.props.id}
                    type={myRadioStyle ? 'radio' : 'checkbox'}
                    onChange={this.handleChange}
                    {...restProps}
                />
                <label
                    className={'Ulight-container Ulight-ToggleElement'}
                    style={style}
                    onClick={this.handleChange}
                >
                    {' '}
                    {/* htmlFor={this.props.id} */}
                    <Button type="button">
                        {checkedText !== undefined && this.props.checked
                            ? checkedText
                            : this.props.children || this.props.value}
                    </Button>
                </label>
                {/* <BaseButton className=".Ulight-Toggle-Element">
        Toggle Button
    </BaseButton> */}
            </div>
        );
    }

    private handleChange(
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLLabelElement>
    ) {
        const ev: any = event;
        ev.target.index = this.props.index;
        if (ev.target.id !== this.props.id) {
            ev.target.id = this.props.id || '';
            ev.target.checked = !this.props.checked;
            ev.target.value = this.props.value;
        }
        // ev.target.checked = this.props.checked;
        this.props.onChange ? this.props.onChange(ev) : null;
    }

    // public shouldComponentUpdate(oldProps: ToggleElementProps, newProps: ToggleElementProps) {
    //     return false;
    // }

    // private handleChangedCheckState(event: React.ChangeEvent<HTMLInputElement>) {
    //     const checked = event.target ? event.target.checked : false;
    //     this.setState({ checked });
    // }
}

export default ToggleElement;
