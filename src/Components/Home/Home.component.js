import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.firstname = this.props.firstname;
    this.lastname = this.props.lastname;
    this.email = this.props.email;
    this.password = this.props.password;
    this.username = this.props.username;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerData}>
          <View style={styles.containerTitle}>
            <Text style={styles.containerTitleText}>Data User</Text>
          </View>
          <View style={styles.DataDetails}>
            <View style={styles.DataField}>
              <Text style={{fontSize: 18}}>First name: {this.firstname}</Text>
            </View>
            <View style={styles.DataField}>
              <Text style={{fontSize: 18}}>Last name: {this.lastname}</Text>
            </View>
            <View style={styles.DataField}>
              <Text style={{fontSize: 18}}>Username: {this.username}</Text>
            </View>
            <View style={styles.DataField}>
              <Text style={{fontSize: 18}}>Email: {this.email}</Text>
            </View>
            <View style={styles.DataField}>
              <Text style={{fontSize: 18}}>Password: {this.password}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  containerTitleText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  containerData: {
    paddingHorizontal: 10,
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  DataField: {
    marginBottom: 10,
  },
});
