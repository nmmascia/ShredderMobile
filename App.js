import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Constants } from 'expo';

import Home from './containers/Home/Home';
import Setlists from './containers/Setlists/Setlists';

import FooterBar from './components/FooterBar/FooterBar';

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
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/setlists" component={Setlists} />
            </Switch>
            <FooterBar />
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
