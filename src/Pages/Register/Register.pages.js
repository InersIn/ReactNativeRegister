import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import {Home} from '../../Components';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      verifyPassword: null,
      passwordVerified: null,
      showData: false,
    };
  }

  ShowData() {
    return (
      <Home
        firstname={this.firstname}
        lastname={this.lastname}
        email={this.email}
        password={this.password}
      />
    );
  }

  SetTextInput(data) {
    this.setState(data);
  }

  VerifyPassword(data) {
    if (data === this.state.password) {
      this.setState({passwordVerified: true});
      return true;
    }
    this.setState({passwordVerified: false});
    return false;
  }
  render() {
    if (this.state.showData) {
      return (
        <Home
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          email={this.state.email}
          username={this.state.username}
          password={this.state.password}
        />
      );
    }
    return (
      <View style={styles.Container}>
        <View style={styles.TitlesContainer}>
          <Text style={styles.title}>Register</Text>
        </View>
        <View style={styles.FormContainer}>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>First Name</Text>
            <TextInput
              style={styles.FormFieldInput}
              focusable={true}
              onChangeText={data => {
                this.SetTextInput({firstname: data});
              }}
              placeholder="First Name"
            />
          </View>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>Last Name</Text>
            <TextInput
              style={styles.FormFieldInput}
              focusable={true}
              onChangeText={data => {
                this.SetTextInput({lastname: data});
              }}
              placeholder="Last Name"
            />
          </View>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>Email</Text>
            <TextInput
              style={styles.FormFieldInput}
              focusable={true}
              onChangeText={data => {
                this.SetTextInput({email: data});
              }}
              placeholder="Email"
            />
          </View>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>Username</Text>
            <TextInput
              style={styles.FormFieldInput}
              focusable={true}
              onChangeText={data => {
                this.SetTextInput({username: data});
              }}
              placeholder="Username"
            />
          </View>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>Password</Text>
            <TextInput
              style={styles.FormFieldInput}
              focusable={true}
              onChangeText={data => {
                this.SetTextInput({password: data});
              }}
              secureTextEntry={true}
              placeholder="*******"
            />
          </View>
          <View style={styles.FormField}>
            <Text style={styles.FormFieldText}>Confirm Password</Text>
            <TextInput
              style={[
                styles.FormFieldInput,
                this.state.passwordVerified !== null
                  ? !this.state.passwordVerified
                    ? styles.PasswordWrong
                    : styles.PasswordCorrect
                  : null,
              ]}
              editable={this.state.password !== null}
              focusable={true}
              onChangeText={data => {
                if (this.VerifyPassword(data)) {
                  this.SetTextInput({verifyPassword: data});
                }
              }}
              secureTextEntry={true}
              placeholder="*******"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (
              this.state.email !== null &&
              this.state.username !== null &&
              this.state.firstname !== null &&
              this.state.lastname !== null &&
              this.state.password !== null &&
              this.state.verifyPassword !== null &&
              this.state.passwordVerified
            ) {
              this.setState({showData: true});
            } else {
              Alert.alert('Something Wrong', 'All input need');
            }
          }}>
          <View style={styles.ButtonRegisterContainer}>
            <Text style={styles.ButtonRegisterText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 30,
  },
  TitlesContainer: {
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: 'black',
  },
  ButtonRegisterContainer: {
    height: 60,
    bottom: 50,
    // display: 'absolute',
    backgroundColor: '#34a6dd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  ButtonRegisterText: {
    fontWeight: 'bold',
    color: 'white',
  },
  FormContainer: {
    flex: 1,
  },
  FormField: {
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  FormFieldText: {
    fontWeight: 'bold',
    color: 'black',
  },
  FormFieldInput: {borderWidth: 1, borderColor: 'grey'},
  PasswordWrong: {
    borderColor: 'red',
  },
  PasswordCorrect: {
    borderColor: 'green',
  },
});
