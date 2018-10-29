import * as React from "react";

interface Props {
    iconName: string
}

class BaseIcon extends React.Component<Props> {
    
    get viewBox() {
        return `0 0 50 50`;
    }

    private style = {
        height: '100%'
    };

    public render() {
        // const useTag = `<use xlink:href="#icons_${this.props.iconName}" />`;
        return <svg style={this.style} viewBox={this.viewBox} > {/* domPropsInnerHTML={useTag} */}
            <use xlinkHref={`#${this.props.iconName}`} />
        </svg>;
    }
}

export default BaseIcon;