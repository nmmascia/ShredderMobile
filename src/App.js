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

import Guitars from './components/Guitars/Guitars';

import IconLinks from './components/IconLinks/IconLinks';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.clear} />
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
                <Guitars
                  guitars={[
                    { id: '1', manufacturer: 'Fender', model: 'Telecaster' },
                    { id: '2', manufacturer: 'Fender', model: 'Stratocaster' }
                  ]}
                />
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
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  clear: {
    height: 22
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});
