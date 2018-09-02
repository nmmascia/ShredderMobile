import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Constants } from 'expo';

import Home from './containers/Home/Home';
import Setlists from './containers/Setlists/Setlists';
import Setlist from './containers/Setlist/Setlist';
import SetlistPractice from './containers/SetlistPractice/SetlistPractice';

import FooterBar from './components/FooterBar/FooterBar';

import COLORS from './constants/colors';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  clientState: {},
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NativeRouter initialEntries={['/setlists/1/practice']}>
          <View style={styles.container}>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/setlists/:id/practice" component={SetlistPractice} />
              <Route path="/setlists/:id/practice/:number" component={() => <Text>Hi</Text>} />
              <Route path="/setlists/:id" component={Setlist} />
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
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: Constants.statusBarHeight,
  },
});
