import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';

import CompletePractice from '../CompletePractice/CompletePractice';

import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import PracticeTrack from '../../components/PracticeTrack/PracticeTrack';

import COLORS from '../../constants/colors';

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

  handleRestartPractice = () => {
    this.setState(() => ({
      currentTrack: 0,
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
            <View>
              <View style={styles.container}>
                <PracticeTrack
                  name={data.setlist.tracks[this.state.currentTrack].name}
                  artist={data.setlist.tracks[this.state.currentTrack].artist}
                />
                <Title
                  text="You perform this song with your..."
                />
                <Text style={{ fontSize: 32, fontWeight: '700', color: COLORS.PURPLE }}>
                  {`${data.setlist.tracks[this.state.currentTrack].guitar.manufacturer} ${data.setlist.tracks[this.state.currentTrack].guitar.model}`}
                </Text>
                <Title
                  text="You'll play this song in..."
                />
                <Text style={{ fontSize: 32, fontWeight: '700', color: COLORS.PURPLE }}>
                  Standard Tuning
                </Text>
              </View>
              {
                data.setlist.tracks[this.state.currentTrack + 1] ? (
                  <Button text="Go to next track" onPress={this.handleGoToNextTrack} />
                ) : (
                  <View>
                    <CompletePractice setlistId={params.id} />
                    <Button text="Start Over" onPress={this.handleRestartPractice} />
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
