import * as React from "react";

interface IconProps {
    iconName: string;
    style?: React.CSSProperties;
}

const BaseIcon = (props: IconProps) => {

    const viewBox =  `0 0 50 50`;

    const style = {
        // height: '100%'
    };

    return(
        // const useTag = `<use xlink:href="#icons_${this.props.iconName}" />`;
        <svg style={props.style || style} viewBox={viewBox} > {/* domPropsInnerHTML={useTag} */}
            <use xlinkHref={`#${props.iconName}`} />
        </svg>
    );
}

export default BaseIcon;