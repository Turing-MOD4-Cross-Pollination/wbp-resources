/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#4E5A31',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render = () => {
    const { navigate } = this.props.navigation;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/header_logo.png')} style={styles.logoImage} />
          </View>
          {/* <Text style={styles.colorado}>Women's Bean Project</Text> */}
          <Text style={styles.summary}>Changing women's lives.</Text>
          <View style={styles.line} />
          <View style={styles.buttonsContainer}>
            <View style={styles.row}>
              <TouchableOpacity style={{ width: '48%' }} onPress={() => navigate('Now')}>
                <View style={styles.buttonNow} title="This is a button">
                  <Text style={{ ...styles.buttonText, color: 'white' }}>Now</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '48%' }} onPress={() => navigate('NearMe')}>
                <View style={styles.buttonNearMe} title="This is a button">
                  <Text style={styles.buttonText}>Near Me</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ width: '100%' }} onPress={() => navigate('ForMe')}>
              <View style={styles.buttonForMe} title="This is a button">
                <Text style={{ ...styles.buttonText, fontSize: 35 }}>My Resources</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E5A31',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 40,
    margin: 0,
    width,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 173,
    justifyContent: 'space-between',
    width: '83%',
    marginBottom: 100,
  },
  buttonNow: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#B14F1F',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonNearMe: {
    height: 80,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 5,
  },
  buttonForMe: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#4E5A31',
  },
  line: {
    width: '83%',
    backgroundColor: '#fff',
    height: 1.5,
    marginBottom: 20,
  },
  logoContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 150,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    width: 230,
    marginLeft: 160,
    fontWeight: '700',
    height: 50,
    color: '#003180',
    letterSpacing: -1,
  },
  logoImage: {
    width: '90%',
    resizeMode: 'contain',
  },
  colorado: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  summary: {
    color: 'white',
    width: '83%',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    opacity: 0.8,
  },
});
