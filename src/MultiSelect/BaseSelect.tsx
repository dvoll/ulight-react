import * as React from "react";
import { ToggleElementProps } from "src/ToggleButton/ToggleElement";

interface BaseSelectState {
    // value: string;
    values: {index?: number, value: string, checked: boolean}[];
}
export interface  BaseSelectProps {
    // children: React.ComponentType<any>;
    multiSelect?: boolean;
    name: string;
    children: React.ComponentType<HTMLInputElement & ToggleElementProps>[];
    onChange: (values: any[] | string) => void;
    // children: any;
}

class BaseSelect extends React.Component<
    BaseSelectProps & React.HTMLAttributes<HTMLDivElement>,
    BaseSelectState
> {
    constructor(props: BaseSelectProps & React.HTMLAttributes<HTMLDivElement>) {
        super(props);
        let values = [{ value: '', checked: false }];
        React.Children.forEach(this.props.children, (child) => {
            const childElement = child as React.ReactElement<HTMLInputElement & ToggleElementProps>;
            const {selected, value} = childElement.props;
            if (selected) {
                values = [{value, checked: selected}]
            }
        })
        this.state = { values };
    }

    public render() {
        // this.props.children.map( (Item) => React.cloneElement(Item., {}))
        const children = React.Children.map(this.props.children, child => {
            const childElement = child as React.ReactElement<
                HTMLInputElement & ToggleElementProps
            >;
            let props = {};
            if (this.props.multiSelect) {
                props = { onChange: (event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>) => this.handleCheckboxStateChangeEvent(event) };
            } else {
                props = {
                    myRadioStyle: true, 
                    name: this.props.name,
                    checked: childElement.props.value === this.state.values[0].value,
                    onChange: (event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>) =>
                        this.handleRadioStateChangeFromEvent(event)
                };
            }
            return React.cloneElement(childElement, props);
        });
        return <div>{children}</div>;
    }

    private handleRadioStateChangeFromEvent(
        event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>
    ) {
        // const checked = event.target ? event.target.checked : false;
        const value = event.target ? event.target.value : "";
        this.props.onChange(value);
        // this.setState({ values: [{ index: 0, value: value, checked: true }] });
    }

    // private handleCheckboxStateChange(itemValue: string, checked: boolean) {
    //     this.value;
    // }

    private handleCheckboxStateChangeEvent(
        event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>
    ) {
        const checked = event.target ? event.target.checked : false;
        const index = event.target ? event.target.index || -1 : -1;
        const value = event.target ? event.target.value : "";
        const newValues = [...this.state.values, { index: index, value: value, checked: checked }];
        this.setState({ values: newValues });
        // this.onChange
    }

    // private handleRadioStateChange(itemValue: string, checked: boolean) {
    //     this.setState({values: [{index: 0, value: itemValue, checked: true}]});
    // }
}

export default BaseSelect;
