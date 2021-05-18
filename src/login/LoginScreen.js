import React from 'react';
import './Login.css';
import LoginInput from './LoginComponents/LoginInput';
import BackgroundVideo from '../images/space-flight.mp4';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailValue: '', passwordValue: '' };
    }

    _onChangeText = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className={'Login-Screen-Container'}>
                <video className='Login-VideoBackground' autoPlay loop muted>
                    <source src={BackgroundVideo} type='video/mp4' />
                </video>
                <div className={'Login-screen-sub-container'}>
                    <div>
                        <p className={'Login-tagline'}>Citizen Corps</p>
                    </div>
                    <div className={'Login-inputs-container'}>
                        <LoginInput customStyle={{ marginBottom: 15 }} name='emailValue' inputType='text' value={this.state.emailValue} placeHolderText='Enter Email' onChangeText={this._onChangeText} />
                        <LoginInput name='passwordValue' inputType='password' value={this.state.passwordValue} placeHolderText='Enter Password' onChangeText={this._onChangeText} />
                    </div>
                    <div className={'Login-button'}>
                        Login
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen