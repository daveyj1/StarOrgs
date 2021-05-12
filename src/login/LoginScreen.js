import React from 'react';
import '../App.css';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailValue: '' };
    }

    _onChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value})
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
                        email:
                        <input type="text" value={this.state.emailValue} onChange={this._onChangeEmailValue} />
                    </form>
                    <form>
                        password :
                        <input type="text" value={this.state.emailValue} onChange={this._onChangeEmailValue} />
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginScreen