import React from 'react';
import '../App.css';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailValue: '', passwordValue: '' };
    }

    _onChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value})
    }

    _onChangePasswordValue = (event) => {
        this.setState({ passwordValue: event.target.value})
    }

    render() {
        return (
            <div className={'Login-container'}>
                <div className={'Login-logo-container'}>
                    <p className={'Login-tagline'}>Citizen Corps</p>
                    <p className={'Login-tagline-subText'}>Create a space for you organization or join an existing one.</p>
                </div>
                <div className={'Login-form-container'}>
                    <form>
                        <input type="text" value={this.state.emailValue} placeHolder={"Email"} onChange={this._onChangeEmailValue} />
                    </form>
                    <form>
                        <input type="password" value={this.state.passwordValue} placeHolder={"Password"} onChange={this._onChangePasswordValue} />
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginScreen