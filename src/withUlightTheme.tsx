import * as React from "react";
import { ThemeContext } from "./theme-context";

// // TODO: Add prop type and default props

export const withUlightTheme = <P extends React.HTMLProps<any>>(UlightComponent: React.ComponentType<P>) => {
    return class extends React.Component<P, {}> {

        constructor(props: P) {
            super(props);
        }

        public render() {
            // const {...restProps } = this.props;
            return (
                <ThemeContext.Consumer>
                    {theme => {
                        const styles = {
                            ["--foreground-rgb" as any]: theme.foreground,
                            ["--secondary-rgb" as any]: theme.secondary,
                            ["--background-rgb" as any]: theme.background,
                            ['--background-accent-rgb' as any]: theme.backgroundAccent,
                            ['--accent-rgb' as any]: theme.accent,
                        };
                        return <UlightComponent className="Ulight-container" {...this.props} style={styles} />;
                    }}
                </ThemeContext.Consumer>
            );
        }
    }
}