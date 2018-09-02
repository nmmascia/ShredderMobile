import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';

import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import PracticeTrack from '../../components/PracticeTrack/PracticeTrack';

const SETLIST_PRACTICE_QUERY = gql`
  query Setlist($id: ID!) {
    setlist(id: $id) {
      id
      tracks {
        id
        artist
        name
        guitar {
          id
          manufacturer
          model
        }
        tuning {
          id
          name
        }
      }
    }
  }
`;

export default class SetlistPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTrack: 0 };
  }

  handleGoToNextTrack = () => {
    this.setState(({ currentTrack }) => ({
      currentTrack: currentTrack + 1,
    }));
  }

  handleCompletePractice = () => {
    console.log('completed!');
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <Query
        query={SETLIST_PRACTICE_QUERY}
        variables={{ id: params.id }}
      >
        {({ data, error, loading }) => {
          if (error) return <Text>Error!</Text>;
          if (loading) return <Loader />;
          return (
            <View style={styles.container}>
              <PracticeTrack
                name={data.setlist.tracks[this.state.currentTrack].name}
                artist={data.setlist.tracks[this.state.currentTrack].artist}
              />
              <Title
                text="You like to practice this song with..."
              />
              <Text style={{ fontSize: 22, fontWeight: '700' }}>
                {`${data.setlist.tracks[this.state.currentTrack].guitar.manufacturer} ${data.setlist.tracks[this.state.currentTrack].guitar.model}`}
              </Text>
              <Text>
                You like to play this song in Drop D
              </Text>
              <Text>
                But the song was recorded in standard tuning
              </Text>
              {
                data.setlist.tracks[this.state.currentTrack + 1] ? (
                  <Button text="Go to next track" onPress={this.handleGoToNextTrack} />
                ) : (
                  <View>
                    <Button text="Complete Practice" onPress={this.handleCompletePractice} />
                    <Button text="Start Over" onPress={this.handleCompletePractice} />
                  </View>
                )
              }
            </View>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
