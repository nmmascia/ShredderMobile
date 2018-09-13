import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import Button from '../../components/Button/Button';

const CREATE_TRACK_MUTATION = gql`
  mutation CreateTrackMutation($name: String!, $artist: String!) {
    createTrack(name: $name, artist: $artist) {
      id
    }
  }
`;

const GET_GUITARS_QUERY = gql`
  query UserGuitars {
    user(id: "1") {
      guitars {
        id
        manufacturer
        model
      }
    }
  }
`;

export default class AddTrackToSetlist extends React.Component {
  state = { track: null, artist: null }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Track Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => {
              this.setState({ track: value });
            }}
            value={this.state.track}
          />
          <Text style={styles.label}>Artist Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => {
              this.setState({ artist: value });
            }}
            value={this.state.artist}
          />
          <Query query={GET_GUITARS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>Error</Text>;
              return (
                <Text>Hi</Text>
              );
            }}
          </Query>
        </View>
        <Mutation
          mutation={CREATE_TRACK_MUTATION}
          variables={{
            artist: this.state.artist,
            name: this.state.track,
          }}
        >
          {(createTrack) => {
            return (
              <Button
                text="Add Track"
                onPress={createTrack}
              />
            );
          }}
        </Mutation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  form: {
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 5,
  },
});
