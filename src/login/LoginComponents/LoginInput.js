import React from 'react';
import '../Login.css';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className={'Login-Input'} style={this.props.customStyle} name={this.props.name} type={this.props.inputType} value={this.props.value} placeHolder={this.props.placeHolderText} onChange={this.props.onChangeText} />
        );
    }
}

export default LoginInput;