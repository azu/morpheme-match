// LICENSE : MIT
"use strict";
import React from "react";
function without(props, ignorePropName) {
    const result = {};
    Object.keys(props).forEach(propName => {
        if (ignorePropName !== propName) {
            result[propName] = props[propName];
        }
    });
    return result;
}
export default Wrapped =>
    class LoadingContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { loading: true, error: null, value: null };
        }

        componentDidMount() {
            this.props.promise.then(
                value => this.setState({ loading: false, value: value }),
                error => this.setState({ loading: false, error: error })
            );
        }

        render() {
            if (this.state.loading) {
                return <h1>Loading dictionary...</h1>;
            } else if (this.state.error !== null) {
                console.error(this.state.error);
                return <h1>Error: {this.state.error.message}</h1>;
            } else {
                const propsWithoutThePromise = without(this.props, "promise");
                return <Wrapped {...propsWithoutThePromise} {...this.state.value} />;
            }
        }
    };
