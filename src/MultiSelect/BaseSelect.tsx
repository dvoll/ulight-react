import * as React from "react";
import { ToggleElementProps } from "src/ToggleButton/ToggleElement";

import './BaseSelect.css';

export interface BaseSelectValue {
    index?: number; 
    value: string | number | string[];
    checked?: boolean;
}

export interface BaseSelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    // children: React.ComponentType<any>;
    // multiSelect?: boolean;
    name: string;
    // children: React.ComponentType<HTMLInputElement & ToggleElementProps>[];
    onSelectionChange?: (event: any) => void;
    // value: BaseSelectValue[] | string;
    // children: any;
}



class BaseSelect extends React.Component<BaseSelectProps> {
    // private checkedElementCondition =

    private myRef = React.createRef<HTMLInputElement>();

    constructor(props: BaseSelectProps) {
        super(props);

        // React.Children.map(this.props.children, (child, index) => {
        //     const childElement = child as React.ReactElement<
        //         HTMLInputElement & ToggleElementProps
        //     >;

        //     let props = {};
        //     if (this.props.multiSelect) {
        //         props = {
        //             onChange: (event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>) => this.handleCheckboxStateChangeEvent(event)
        //         };
        //     } else {
        //         const propValue = this.props.value as string;
        //         props = {
        //             myRadioStyle: true,
        //             name: this.props.name,
        //             checked: childElement.props.value ? childElement.props.value === propValue : false,
        //             onChange: (event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>) =>
        //                 this.handleRadioStateChangeFromEvent(event)
        //         };
        //     }

        //     return React.cloneElement(childElement, props);
        // });
    }

    public render() {
        // this.props.children.map( (Item) => React.cloneElement(Item., {}))
        const children = React.Children.map(
            this.props.children,
            (child, index) => {
                const childElement = child as React.ReactElement<ToggleElementProps
                >;

                let props = {};
                if (this.props.multiple) {
                    // const childIndex = childElement.props.index;
                    const propValue = this.props.value as string[];
                    props = {
                        id: this.props.name + index,
                        index,
                        checked: !!propValue.find(
                            item => item === '' + childElement.props.value
                        ),
                        onChange: (
                            event: React.ChangeEvent<
                                HTMLInputElement & ToggleElementProps
                            >
                        ) => this.handleCheckboxStateChangeEvent(event)
                    };
                } else {
                    const propValue = this.props.value as string;
                    props = {
                        myRadioStyle: true,
                        id: this.props.name + index,
                        name: this.props.name,
                        checked: childElement.props.value
                            ? !!(
                                  '' + childElement.props.value ===
                                  '' + propValue
                              )
                            : false,
                        onChange: (
                            event: React.ChangeEvent<
                                HTMLInputElement & ToggleElementProps
                            >
                        ) => this.handleRadioStateChangeFromEvent(event)
                    };
                }

                return React.cloneElement(childElement, props);
            }
        );
        return (
            <div ref={this.myRef} className="Ulight-BaseSelect">
                {children}
            </div>
        );
    }

    public shouldComponentUpdate(nextProps: BaseSelectProps) {
        if (this.props.value !== nextProps.value) {
            return true;
        }
        const oldValues = React.Children.map(this.props.children, (child: React.ReactElement<ToggleElementProps>) => child.props.value);
        const newValues = React.Children.map(nextProps.children, (child: React.ReactElement<ToggleElementProps>) => child.props.value);
        if (oldValues.length !== newValues.length) {
            return true;
        }
        const equal = oldValues.every((item, index) => item === newValues[index])
        return !equal;
    }

    private handleRadioStateChangeFromEvent(
        event: React.ChangeEvent<HTMLInputElement & ToggleElementProps>
    ) {
        // const checked = event.target ? event.target.checked : false;
        const value = event.target ? event.target.value : '';
        // this.props.onSelectionChange ? this.props.onSelectionChange(value) : null;

        const ev = event as React.ChangeEvent<any>;
        ev.target.id = this.props.id;
        ev.target.value = value;
        this.props.onChange && this.props.onChange(ev);
        this.props.onSelectionChange && this.props.onSelectionChange(ev);
        // this.setState({ values: [{ index: 0, value: value, checked: true }] });
    }

    // private handleCheckboxStateChange(itemValue: string, checked: boolean) {
    //     this.value;
    // }

    private handleCheckboxStateChangeEvent(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const checkedStateOfChangedElement = event.target
            ? event.target.checked
            : false;
        // const indexOfChangedElement =
        //     (event.target && event.target.index) || 1 >= 0
        //         ? event.target.index
        //         : -1;
        const valueOfChangedElement = event.target
            ? '' + event.target.value
            : '';
        // const propValue = this.props.value as BaseSelectValue[];
        // const newValues = [...propValue, { index: index, value: value, checked: checked }];
        // this.props.onChange(newValues);

        // const newValues: BaseSelectValue[] = [];
        const values = (this.props.value as string[]).slice();

        if (checkedStateOfChangedElement === true) {
            values.push(valueOfChangedElement);
            // oldValues.push({
            //     index: indexOfChangedElement,
            //     value: valueOfChangedElement
            // });
        } else {
            const arrayIndex = values.findIndex(
                item => item === '' + valueOfChangedElement
            );
            values.splice(arrayIndex, 1);
        }

        // oldValues.forEach((item) => {
        //     const isChangedElement = item.index === indexOfChangedElement;
        //     let elementShouldBeChecked = false;

        //     if (isChangedElement) {
        //         elementShouldBeChecked = checkedStateOfChangedElement;
        //     } else {
        //         elementShouldBeChecked = true;
        //     }

        //     if (elementShouldBeChecked) {
        //         newValues.push({
        //             index: item.index,
        //             value: item.value
        //         });
        //     }
        // })
        // React.Children.forEach(this.props.children, (child, index) => {
        //     const childElement = child as React.ReactElement<
        //         HTMLInputElement & ToggleElementProps
        //     >;

        //     const isChangedElement = index === indexOfChangedElement;
        //     let elementShouldBeChecked = false;

        //     if (isChangedElement) {
        //         elementShouldBeChecked = checkedStateOfChangedElement;
        //     } else if(childElement.props.checked) {
        //         elementShouldBeChecked = true;
        //     }

        //     if (elementShouldBeChecked) {
        //         newValues.push({
        //             index,
        //             value: valueOfChangedElement
        //         });
        //     }

        // });
        // const newEvent = {...event};
        // const extraEventData: {event: {target: HTMLSelectElement}} = {
        // const extraEventData: {event: {target: {
        // selectedIndex: number,
        // options: HTMLOptionsCollection,
        //     length: number
        // }}} = {
        //     event: {
        //         target: {
        //             selectedIndex: 1,
        //             length: -1,
        //             options: {
        //                 item: (number) => null,
        //                 namedItem: (name) => null,
        //                 length: -1,
        //                 selectedIndex: -1,
        //                 add: (element, before?) => console.log,
        //                 remove: (index: number) => console.log
        //             }
        //         }
        //     }
        // }
        // const newEvent2 = Object.assign(event, extraEventData)

        // const ev = newEvent2 as React.ChangeEvent<HTMLSelectElement>;
        // ev.target.id = this.props.id || '';
        // ev.target.value = oldValues;
        const ev = event as any;
        ev.target.selectedOptions = values;
        ev.target.id = this.props.id;

        this.props.onChange && this.props.onChange(ev);
        this.props.onSelectionChange && this.props.onSelectionChange(ev);
    }

    // private handleRadioStateChange(itemValue: string, checked: boolean) {
    //     this.setState({values: [{index: 0, value: itemValue, checked: true}]});
    // }
}

export default BaseSelect;
