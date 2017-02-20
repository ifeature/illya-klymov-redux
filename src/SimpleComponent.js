import React, { Component, PropTypes } from 'react';
import { decorator } from './decorator';

class SimpleComponent extends Component {
    static propTypes = {
        a: PropTypes.string,
        b: PropTypes.string
    };

    render() {
        return (
            <div>{this.props.a} SimpleComponent {this.props.b}</div>
        );
    }
}

export default decorator(() => {
    return {
        a: 'Hello',
        b: 'World'
    };
})(SimpleComponent);

