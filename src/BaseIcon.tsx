import * as React from "react";

interface IconProps {
    iconName: string;
    style?: React.CSSProperties;
}

class BaseIcon extends React.Component<IconProps> {

    get viewBox() {
        return `0 0 50 50`;
    }

    private style = {
        // height: '100%'
    };

    public render() {
        // const useTag = `<use xlink:href="#icons_${this.props.iconName}" />`;
        return <svg style={this.props.style || this.style} viewBox={this.viewBox} > {/* domPropsInnerHTML={useTag} */}
            <use xlinkHref={`#${this.props.iconName}`} />
        </svg>;
    }
}

export default BaseIcon;