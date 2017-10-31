import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  NativeRouter,
  Route,
  Link
} from 'react-router-native';

import IconLinks from './components/IconLinks/IconLinks';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <View>
                  <Text>Welcome!</Text>
                </View>
              );
            }}
          />
          <Route
            exact
            path="/tracks"
            component={() => {
              return (
                <View>
                  <Text>Tracks</Text>
                </View>
              );
            }}
          />
          <Route
            exact
            path="/guitars"
            component={() => {
              return (
                <View>
                  <Text>Guitars</Text>
                </View>
              );
            }}
          />
          <Route
            exact
            path="/setlists"
            component={() => {
              return (
                <View>
                  <Text>Setlists</Text>
                </View>
              );
            }}
          />

          <View style={styles.footer}>
            <IconLinks />
          </View>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});
