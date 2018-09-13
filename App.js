import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { NativeRouter, Route, Switch } from 'react-router-native';

import Home from './containers/Home/Home';
import Setlists from './containers/Setlists/Setlists';
import Setlist from './containers/Setlist/Setlist';
import SetlistPractice from './containers/SetlistPractice/SetlistPractice';
import AddTrackToSetlist from './containers/AddTrackToSetlist/AddTrackToSetlist';
import Tracks from './containers/Tracks/Tracks';
import NewTrack from './containers/NewTrack/NewTrack';

import FooterBar from './components/FooterBar/FooterBar';
import HeaderBar from './components/HeaderBar/HeaderBar';

import COLORS from './constants/colors';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  clientState: {},
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NativeRouter initialEntries={['/tracks']}>
          <View style={styles.container}>
            <HeaderBar />
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/setlists/:id/add-track" component={AddTrackToSetlist} />
              <Route path="/setlists/:id/practice" component={SetlistPractice} />
              <Route path="/setlists/:id/practice/:number" component={() => <Text>Hi</Text>} />
              <Route path="/setlists/:id" component={Setlist} />
              <Route path="/setlists" component={Setlists} />
              <Route path="/tracks/create" component={NewTrack} />
              <Route path="/tracks" component={Tracks} />
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
  },
});
