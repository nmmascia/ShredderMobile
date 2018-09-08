import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = ({ name, username, setlistsCount, numberOfDaysPracticedStreak }) => {
  return (
    <View>
      <View style={styles.profileBanner}>
        <View style={styles.userDetails}>
          <Text>{name}</Text>
          <Text>{username}</Text>
        </View>
      </View>
      <View style={styles.quickStats}>
        <View>
          <Text>{setlistsCount}</Text>
          <Text>Setlists Count</Text>
        </View>
        <View>
          <Text>{numberOfDaysPracticedStreak}</Text>
          <Text>Longest Practice Streak</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  profileBanner: {
    height: 250,
    backgroundColor: '#ddd',
    justifyContent: 'flex-end',
  },
  userDetails: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  quickStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Profile;
