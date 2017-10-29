import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from './relay-environment';

import User from './User';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery($id: ID!) {
            user(id: $id) {
              ...User_user
            }
          }
        `}
        variables={{
          id: '1'
        }}
        render={({error, props}) => {
          if (error) {
            return <View><Text>{error.message}</Text></View>;
          } else if (props) {
            return <User user={props.user} />;
          }
          return <View><Text>Loading</Text></View>;
        }}
      />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
