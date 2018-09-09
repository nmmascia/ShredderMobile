import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Avatar from '../Avatar/Avatar';
import QuickStats from '../QuickStats/QuickStats';
import UserDetails from '../UserDetails/UserDetails';

const Profile = ({
  name,
  username,
  setlistsCount,
  totalPracticesCount,
  numberOfDaysPracticedStreak
}) => {
  return (
    <View>
      <View style={styles.profileBanner}>
        <Avatar />
        <View style={styles.userDetails}>
          <UserDetails
            name={name}
            username={username}
          />
        </View>
      </View>
      <QuickStats
        stats={[{
          label: 'Setlists Count',
          value: setlistsCount,
        }, {
          label: 'Total Practices',
          value: 12,
        }, {
          label: 'Longest Streak',
          value: numberOfDaysPracticedStreak,
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
    // backgroundColor: '#ddd',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userDetails: {
    paddingBottom: 20,
  },
});

export default Profile;
