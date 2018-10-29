import * as React from "react";

export interface Props {
    name: string;    
    level: number;
}

const BaseHeading = (props: Props) => {
    const style = {
        color: 'var(--grey-500)',
        fontSize: '1.2rem',
        fontStyle: 'italic',
        // textTransform: 'uppercase',
    };
    const Heading = `h${props.level}`;
    return <Heading style={style}>{props.name}</Heading>;
};

export default BaseHeading;