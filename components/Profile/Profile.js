import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QuickStats from '../QuickStats/QuickStats';
import UserDetails from '../UserDetails/UserDetails';

const Profile = ({ name, username, setlistsCount, numberOfDaysPracticedStreak }) => {
  return (
    <View>
      <View style={styles.profileBanner}>
        <View style={styles.userDetails}>
          <UserDetails
            name="Nicholas Mascia"
            username="@nmmascia"
          />
        </View>
      </View>
      <QuickStats
        stats={[{
          label: 'Setlists Count',
          value: 9,
        }, {
          label: 'Total Practices',
          value: 10,
        }, {
          label: 'Longest Streak',
          value: 2,
        }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  profileBanner: {
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'flex-end',
  },
  userDetails: {
    paddingBottom: 20,
  },
});

export default Profile;
