import React, { Component } from 'react';

export function decorator(func) {
    return (InnerComponent) =>
        class extends Component {
            render() {
                return (
                    <InnerComponent {...func()} {...this.props} {...this.state}/>
                );
            }
        }
}