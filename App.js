import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { NativeRouter, Route } from 'react-router-native';
import { Constants } from 'expo';

import Home from './containers/Home/Home';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  clientState: {},
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NativeRouter>
          <View style={styles.container}>
            <Route exact={true} path="/" component={Home} />
          </View>
        </NativeRouter>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
});
