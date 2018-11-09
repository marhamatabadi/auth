import React, { Component } from 'react';
import { Button, Card, CardSection, Input,Spinner } from './common';
import { Text } from 'react-native';
class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
    }
    renderButton() {
        if (this.state.loading) {
            consol.log("loading true");
            return <Spinner size='small' />;
        }
        consol.log("loading false");
        return (
            
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={{ height: 20, width: 100 }}
                    />
                </CardSection>
                <CardSection >
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;